import axios from 'axios';

//const apiKey = axios.get('/apiKey');
    
const API =  {

    trending: function() {
        return axios.get('/trending')
    },

    query: function(searchTerm) {
        return axios.get('/search', {movieSearch: searchTerm})
    },

    newUser: function(user) {
        return axios.post('/login', user);
    }

    

}

export default API;