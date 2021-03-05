import React from 'react';
import axios from 'axios';

const baseURL = "https://api.themoviedb.org/3/trending/all/day?"
const APIkey = process.env.APIkey;

export default {
    trending: function() {
        return axios.get(baseURL + APIkey)
    }
}