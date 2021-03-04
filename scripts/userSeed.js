const mongoose = require('mongoose');
const db = require('../models/User')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MongoMoviesDB");

const userSeed = [
    {
        email: "a@a.com",
        password: "aa"
    },
    {
        email: "b@b.com",
        password: "bb"
    },
    {
        email: "c@c.com",
        password: "cc"
    },
    {
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
