import axios from 'axios';

const APIkey = process.env.APIkey;

const APIqueries =  {
    trending: function() {
        return axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${APIkey}`)
    },

    query: function(searchTerm) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
    }
}

export default APIqueries;