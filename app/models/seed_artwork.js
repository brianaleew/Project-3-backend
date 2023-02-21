const mongoose = require('mongoose')
const Gallery = require('./gallery')
const db = require('../../config/db')

const starterGalleries = [
    {
        name: 'GalleryA',
        description: 'A gallery',
        location: 'City,State',
        img: 'image link here',
    },
    {
        name: 'GalleryB',
        description: 'A gallery',
        location: 'City,State',
        img: 'image link here',
    },
    {
        name: 'GalleryC',
        description: 'A gallery',
        location: 'City,State',
        img: 'image link here',
    },
    {
        name: 'GalleryD',
        description: 'A gallery',
        location: 'City,State',
        img: 'image link here',
    },
]

// first we connect to the db
// then remove all pets
// then add the start pets
// and always close the connection, whether its a success or failure

mongoose
    .connect(db, {
        useNewUrlParser: true,
    })
    .then(() => {
        Gallery.deleteMany()
            .then(deletedGalleries => {
                console.log('the deleted pets:', deletedGalleries)
                // now we add our pets to the db
                Gallery.create(starterGalleries)
                    .then(newGalleries => {
                        console.log('the new pets', newGalleries)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })
