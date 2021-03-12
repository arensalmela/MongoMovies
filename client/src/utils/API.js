import axios from 'axios';

//const apiKey = axios.get('/apiKey');

const API = {

    trending: function () {
        return axios.get('/trending')
    },

    query: function (searchTerm) {
        return axios.get('/search', { movieSearch: searchTerm })
    },

    newUser: function (user) {
        return axios.post('/login', user);
    },

    addMovie: function (movie, email) {
        const body = { ...movie, ...email }
        return axios.post('/userProfileAdd', body)
    },

    getUserProfile: function (email) {
        return axios.get('userProfile', email)
    }

}

export default API;