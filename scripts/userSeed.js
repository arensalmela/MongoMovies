const mongoose = require("mongoose");
const db = require("../models/User");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MongoMoviesDB"
);

const userSeed = [
  {
    name: "aabb",
    email: "adsalmela@gmail.com",
    googleID: "aa",
    movies: [
      {
        title: "Toy Story",
        poster: "Movie Poster Toy Story",
        released: "1999",
        overview: "Toy Story Overview",
        apiID: "API ID",
        watched: true,
        runtime: "Not long enough",
      },
      {
        title: "Toy Story 2",
        poster: "Movie Poster Toy Story 2",
        released: "2001",
        overview: "Toy Story 2 Overview",
        apiID: "API ID",
        watched: true,
        runtime: "Too Long",
      },
    ],
  },
  {
    name: "bbaa",
    email: "b@b.com",
    googleID: "bb",
  },
  {
    name: "ddcc",
    email: "c@c.com",
    googleID: "cc",
  },
  {
    name: "ccdd",
    email: "d@d.com",
    googleID: "dd",
  },
];

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
  .then((data) => {
    console.log(data.result + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
