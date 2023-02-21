const mongoose = require('mongoose')
const Gallery = require('./gallery')
const db = require('../../config/db')

const starterGalleries = [
    {
        name: 'The Hipster Space',
        description:
            'A super hip place where you can feel really uncomfortable all of the time.',
        location: 'Nashville, TN',
        img: 'https://source.unsplash.com/TDNZE9Kvyrs',
        artworks: [
            {
                title: 'The Two Fridas',
                date: 1939,
                img: '/images/the-two-fridas.jpg',
                media: 'oil on canvas',
                description:
                    "This portrait shows Frida's two different personalities. One is the traditional Frida in Tehuana costume, with a broken heart, sitting next to an independent, modern dressed Frida.",
                // artist: 'Frida Kahlo',
            },
            {
                title: 'Medusa',
                date: 1597,
                img: '/images/medusa-1597.jpg',
                media: 'Oil on canvas mounted on wood',
                description:
                    'Two versions of Medusa were created by Michelangelo Merisi da Caravaggio – one in 1596 and the other in 1597 – depicting the exact moment she was executed by Perseus.',
                // artist: 'Caravaggio',
            },
            {
                title: 'God, Law',
                date: 1981,
                img: '/images/god-law.jpg',
                media: 'pencil, paper',
                description:
                    'A simple yet effective statement on religion, money, and legality.',
                // artist: 'Jean-Michel Basquiat',
            },
        ],
    },
    {
        name: 'Art Blamange',
        description:
            'No talking. No breathing. No clothing.  An art experience so titilating your mind will be blown.  Just go outside first.',
        location: 'Montreal, QC',
        img: 'https://source.unsplash.com/UCNaGWn4EfU',
        artworks: [
            {
                title: 'Self Portrait with Thorn Necklace and Hummingbird',
                date: 1940,
                img: '/images/self-portrait-with-necklace-of-thorns.jpg',
                media: 'oil on canvas on masonite',
                description:
                    "This rather small painting shows Kahlo in a frontal position and directly confronting the viewer's gaze from the canvas with leaves behind her in the background. Her bold eyebrows hold the emphasis on her face, as a thorn necklace strangles her throat, trailing down her chest like the roots of a tree.",
                // artist: 'Frida Kahlo',
            },
            {
                title: 'David With the Head of Goliath',
                date: 1610,
                img: '/images/david-with-the-head-of-goliath.jpg',
                media: 'Oil on canvas',
                description:
                    "Caravaggio captures the dramaof the moment effectively by having the head dangling from David's hand and dripping blood, rather than resting on a ledge.",
                // artist: 'Caravaggio',
            },
            {
                title: 'Cabeza',
                date: 1982,
                img: '/images/cabeza.jpg',
                media: 'acrylic, crayon',
                description: 'Crazy, man.',
                // artist: 'Jean-Michel Basquiat',
            },
        ],
    },
    {
        name: 'Sour Pepper Art Collective',
        description:
            'Super cool, man. Vibe, chill, hang out. And have a burrito, bro.',
        location: 'Venice, CA',
        img: 'https://source.unsplash.com/V3-HhUXO_os',
        artworks: [
            {
                title: 'Self-Portrait Dedicated to Leon Trotsky',
                date: 1937,
                img: '/images/self-portrait-dedicated-to-leon-trotsky.jpg',
                media: 'oil on masonite',
                description: 'This painting was a gift to Leon Trotsky.',
                // artist: 'Frida Kahlo',
            },
            {
                title: 'The Cardsharps',
                date: 1594,
                img: '/images/cardsharps-1594.jpg',
                media: 'Oil on canvas mounted on wood',
                description:
                    'The painting shows an expensively-dressed but unworldly boy playing cards with another boy',
                // artist: 'Caravaggio',
            },
            {
                title: 'Skull',
                date: 1981,
                img: '/images/skull.jpg',
                media: 'acrylic, crayon, canvas',
                description: 'A skull.',
                // artist: 'Jean-Michel Basquiat',
            },
        ],
    },
    {
        name: "Bob's Art Emporium",
        description: 'Up to 99% off all artwork all the time!! Come buy some!',
        location: 'Peoria, IL',
        img: 'https://source.unsplash.com/HlNGaRa2eXk',
        artworks: [
            {
                title: 'Roots',
                date: 1943,
                img: '/images/roots.jpg',
                media: 'oil paint',
                description:
                    'A woman in repose, sprouting roots from her body.',
                // artist: 'Frida Kahlo',
            },
            {
                title: 'The Beheading of St John the Baptist',
                date: 1608,
                img: '/images/the-decapitation-of-saint-john-the-baptist-1607.jpg',
                media: 'Oil on canvas',
                description:
                    "It is the only work by Caravaggio to bear the artist's signature, which he placed in red blood spilling from the Baptist's cut throat.",
                // artist: 'Caravaggio',
            },
            {
                title: 'Riddle Me This, Batman',
                date: 1987,
                img: '/images/riddle-me-this-batman.jpg',
                media: 'acrylic, crayon, canvas',
                description: 'An allegory on the batman trope.',
                // artist: 'Jean-Michel Basquiat',
            },
        ],
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
