//This is the schema for Galleries
// REMINDER !!
//Featured Artists will be a virtual that we add after we have artists to populate the area!!

const mongoose = require('mongoose')

const artworkSchema = require('./artwork')

const gallerySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        location: String,
        img: String,
        curators: Array,
        artworks: [artworkSchema],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Gallery', gallerySchema)
