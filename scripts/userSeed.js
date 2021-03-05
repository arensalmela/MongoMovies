const mongoose = require('mongoose');
const db = require('../models/User')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MongoMoviesDB");

const userSeed = [
    {
        name: "aabb",
        email: "a@a.com",
        password: "aa"
    },
    {
        name: "bbaa",
        email: "b@b.com",
        password: "bb"
    },
    {
        name: "ddcc",
        email: "c@c.com",
        password: "cc"
    },
    {
        name: "ccdd",
        email: "d@d.com",
        password: "dd"
    },
]

// db.User
//     .remove({})
//     .then(() => db.User.collection.insertMany(userSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.log(err);
//         process.exit(1);
//     })


db.insertMany(userSeed)
    .then(data => {
        console.log(data.result + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
