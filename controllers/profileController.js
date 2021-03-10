//import axios from 'axios';
const db = require("../models");
//require("dotenv").config();
// const fetch = require("node-fetch");
// const User = require("../models/User");

//Define methods for movieController
//const APIkey = process.env.APIkey;

module.exports = {
  userProfile: function (req, res) {
    db.User.findOne({ email: req.params.email }).then((data) => res.json(data));
  },
  addMovieToProfile: function (req, res) {
    db.User.updateOne(
      { email: req.body.email },
      {
        $push: {
          movies: {
            title: req.body.title,
            poster: req.body.poster_path,
            released: req.body.release_date,
            overview: req.body.overview,
            apiID: req.body.id,
            watched: true,
          },
        },
      }
    ).then((data) => res.json(data));
  },
};
