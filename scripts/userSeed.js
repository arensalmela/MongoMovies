const mongoose = require("mongoose");
const db = require("../models/User");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MongoMoviesDB"
);

const userSeed = [
  {
    name: "aabb",
    email: "adsalmela@gmail.com",
    googleId: "aa",
    movies: [
      {
        title: "Toy Story",
        poster_path: "Movie Poster Toy Story",
        release_date: "1999",
        overview: "Toy Story Overview",
        id: "API ID",
        watched: false,
      },
      {
        title: "Toy Story 2",
        poster_path: "Movie Poster Toy Story 2",
        release_date: "2001",
        overview: "Toy Story 2 Overview",
        id: "API ID",
        watched: false,
      },
    ],
  },
];

db.insertMany(userSeed)
  .then((data) => {
    console.log(data.result + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
