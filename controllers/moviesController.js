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
};
