const mongoose = require('mongoose')
const Artist = require('./artist')
const db = require('../../config/db')

const starterArtists = [
    {
        name: 'Caravaggio',
        description: 'One of the  leading Italian painter of the late 16th and early 17th centuries who became famous for the intense and unsettling realism of his large-scale religious works.',
        location: 'Milan, Italy',
        website: 'https://www.caravaggio.org/',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/220px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg', 
        
    },
    {
        name: 'Frida Kahlo',
        description: 'Frida Kahlo was a a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico.',
        location: 'Mexico City, Mexico',
        website: 'https://www.fridakahlo.org/',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswCZvfUKzrNrXzOT359RTNi5lNBdwPrw1kw&usqp=CAU', 
    },
    {
        name: 'Jean-Michel Basquiat',
        description: 'Jean-Michel Basquiat was a Neo-Expressionist painter.His work explored his mixed African, Latinx, and American heritage through a visual vocabulary of personally resonant signs, symbols, and figures, and his art developed rapidly in scale, scope, and ambition as he moved from the street to the gallery.',
        location: 'New York City, USA',
        website: 'https://www.biography.com/artists/jean-michel-basquiat',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Jean-Michel_Basquiat_1982_by_Andy_Warhol.png/220px-Jean-Michel_Basquiat_1982_by_Andy_Warhol.png', 
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
