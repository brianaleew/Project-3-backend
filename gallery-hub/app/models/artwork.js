// import dependencies
const mongoose = require('mongoose')

// artwork is a subdocument. NOT A MODEL.
// artwork will be part of the artwork array added to galleries.
// since we only need the schema, we can skip destructuring from mongoose

const artworkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },

    website: {
        type: String,
        required: true
    },
   description: {
        type: String,
        required: true,
    },
    

}, { timestamps: true })

module.exports = artworkSchema