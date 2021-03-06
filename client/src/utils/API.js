import axios from 'axios';

const apiKey = axios.get('/apiKey');
    
const API =  {

    trending: function() {
        return axios.get('/trending')
    },

    query: function(searchTerm) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
    },

    newUser: function(user) {
        return axios.post('/login', user);
    }


}

export default API;