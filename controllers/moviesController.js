//import axios from 'axios';
//const db = require('../models/Movie');
require("dotenv").config();
const fetch = require("node-fetch");

//Define methods for movieController
const APIkey = process.env.APIkey;

module.exports = {
  trending: function (req, res) {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIkey}`)
      .then((response) => response.json())
      .then((data) => res.json(data));
  },

  
  search: function (req, res) {
    const movieSearch = req.body.query
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${movieSearch}&page=1&include_adult=false`)
      .then((response) => response.json())
      .then((data) => res.json(data));
  },
};
