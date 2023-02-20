// import dependencies
const mongoose = require('mongoose')

// artwork is a subdocument. NOT A MODEL.
// artwork will be part of the artwork array added to galleries.
// since we only need the schema, we can skip destructuring from mongoose

const artworkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: Number,
        },
        img: {
            type: String,
        },
        media: {
            type: String,
        },
        description: {
            type: String,
        },
        artist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist',
        },
    },
    { timestamps: true }
)

module.exports = artworkSchema
