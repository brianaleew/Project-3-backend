const mongoose = require('mongoose')
const Artist = require('./artist')
const db = require('../../config/db')

const starterArtists = [
    {
        name: 'Briana Wright',
        description: 'An artist',
        location: 'City,State',
        website: 'www.google.com',
    },
    {
        name: 'Eric Elsner',
        description: 'An artist',
        location: 'City,State',
        website: 'www.google.com',
    },
    {
        name: 'Belal Elkurd',
        description: 'An artist',
        location: 'City,State',
        website: 'www.google.com',
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
        Artist.deleteMany()
            .then(deletedArtists => {
                console.log('the deleted pets:', deletedArtists)
                // now we add our pets to the db
                Artist.create(starterArtists)
                    .then(newArtists => {
                        console.log('the new pets', newArtists)
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
