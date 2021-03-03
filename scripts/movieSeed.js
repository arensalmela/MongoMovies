const mongoose = require('mongoose');
const db = require('../models/Movies')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MongoMoviesDB");

const movieSeed = [
    {
        title: "Fever Pitch",
        poster: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
        released: "2005-04-06",
        overview: "Lindsay is stuck in the middle of her relationship with Ben and his passion for the Boston Red Sox.",
        watched: true
    },
    {
        title: "Toy Story",
        poster: "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        released: "1995-10-30",
        overview: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
        watched: true
    },
    {
        title: "Titanic",
        poster: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        released: "1997-11-18",
        overview: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
        watched: false
    },
    {
        title: "Avatar",
        poster: "/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
        released: "2009-12-10",
        overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        watched: false
    }
]

// db.Movie
//     .remove({})
//     .then(() => db.Movie.collection.insertMany(movieSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.log(err);
//         process.exit(1);
//     })

db.insertMany(movieSeed)
    .then(data => {
        console.log(data + " records inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })