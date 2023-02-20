// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Gallery = require('../models/gallery')

// custom middleware
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const notAllowed = customErrors.NotAllowedError
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// ROUTES

// INDEX

router.get('/artworks/:galleryId', requireToken, (req, res, next) => {
    const galleryId = req.params.galleryId

    Gallery.findById(galleryId)
        .then(handle404)
        .then(gallery => {
            return gallery.artworks.map(artwork => artwork.toObject())
        })
        .then(artwork => res.status(200).json({ artwork: artwork }))
        .catch(next)
})

router.get(
    '/artworks/:galleryId/:artworkId',
    requireToken,
    (req, res, next) => {
        const { galleryId, artworkId } = req.params
        if (req.user.isCurator) {
            Gallery.findById(galleryId)
                .then(handle404)
                .then(gallery => {
                    return gallery.artworks.id(artworkId)
                })
                .then(artwork => res.status(200).json({ artwork: artwork }))
                .catch(next)
        } else {
            throw new notAllowed()
        }
    }
)

// CREATE/ADD Artwork to gallery
router.post(
    '/artworks/:galleryId',
    requireToken,
    removeBlanks,
    (req, res, next) => {
        if (req.user.isCurator) {
            // isolate our artwork from the request, and save to variable
            const artwork = req.body.artwork
            // isolate and save our gallery's id for easy reference
            const galleryId = req.params.galleryId
            // find the gallery and push the new artwork into the gallery's array
            Gallery.findById(galleryId)
                // first step is to use our custom 404 middleware
                .then(handle404)
                // handle adding artwork to gallery
                .then(gallery => {
                    console.log('the gallery: ', gallery)
                    console.log('the artwork: ', artwork)
                    // add artwork to artworks array
                    gallery.artworks.push(artwork)

                    // save the gallery
                    return gallery.save()
                })
                // send info after updating the gallery
                .then(gallery => res.status(201).json({ gallery: gallery }))
                // pass errors along to our error handler
                .catch(next)
        } else {
            throw new notAllowed()
        }
    }
)

// PATCH -> update a artwork
// PATCH /artworks/:galleryId/:artworkId
router.patch(
    '/artworks/:galleryId/:artworkId',
    requireToken,
    removeBlanks,
    (req, res, next) => {
        // get and save the id's to variables
        const galleryId = req.params.galleryId
        const artworkId = req.params.artworkId
        if (req.user.isCurator) {
            // find our gallery
            Gallery.findById(galleryId)
                .then(handle404)
                .then(gallery => {
                    // single out the artwork
                    const theArtwork = gallery.artworks.id(artworkId)
                    // make sure the user is the gallery's owner
                    requireOwnership(req, gallery)
                    // update accordingly
                    theArtwork.set(req.body.artwork)

                    return gallery.save()
                })
                // send a status
                .then(() => res.sendStatus(204))
                .catch(next)
        } else {
            throw new notAllowed()
        }
    }
)

// DELETE -> destroy a artwork
// DELETE /artworks/:galleryId/:artworkId
router.delete(
    '/artworks/:galleryId/:artworkId',
    requireToken,
    (req, res, next) => {
        const galleryId = req.params.galleryId
        const artworkId = req.params.artworkId
        if (req.user.isCurator) {
            // find the gallery
            Gallery.findById(galleryId)
                .then(handle404)
                // grab the specific artwork using it's id
                .then(gallery => {
                    // isolate the artwork
                    const theArtwork = gallery.artworks.id(artworkId)
                    // make sure the user is the owner of the gallery
                    requireOwnership(req, gallery)
                    // call remove on our artwork subdoc
                    theArtwork.remove()
                    // return the saved gallery
                    return gallery.save()
                })
                // send a response
                .then(() => res.sendStatus(204))
                // pass errors to our error handler (using next)
                .catch(next)
        } else {
            throw new notAllowed()
        }
    }
)

// export our router
module.exports = router
