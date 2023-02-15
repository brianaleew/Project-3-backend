//The Artist Model/Schema

const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: String,
        location: String,
        website: String,
        img: String,
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Artist', artistSchema)
