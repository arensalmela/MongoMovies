//import axios from 'axios';
const db = require("../models");
//require("dotenv").config();
// const fetch = require("node-fetch");
// const User = require("../models/User");

//Define methods for movieController
//const APIkey = process.env.APIkey;

module.exports = {
  userProfile: function (req, res) {
    db.User.findOne({ googleID: req.params.googleId }).then((data) => res.json(data));
  },
  addMovieToProfile: function (req, res) {
    db.User.updateOne(
      { email: req.body.email },
      {
        $push: {
          movies: {
            title: req.body.title,
            poster_path: req.body.poster_path,
            release_date: req.body.release_date,
            overview: req.body.overview,
            id: req.body.id,
            watched: false,
          },
        },
      }
    ).then((data) => res.json(data));
  },

  updateMovietoWatched: function (req, res) {
    console.log(req.body);
    db.User.updateOne(
      { email: req.body.email, "movies.title": req.body.title },
      {
        $set: {
          "movies.$.watched": true,
        },
      }
    )
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
};
