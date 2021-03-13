import axios from 'axios';

const API = {

    trending: function () {
        return axios.get('/trending')
    },

    query: function (query) {
        return axios.get(`/search/${query}`)
    },

    newUser: function (user) {
        return axios.post('/login', user);
    },

    addMovie: function (movie, email) {
        const body = { ...movie, email }
        return axios.post('/userProfileAdd', body)
    },

    getUserProfile: function (googleId) {
        return axios.get(`/userProfile/${googleId}`)
    },

    toggleWatched: function (email, title, isWatched) {
        return axios.put('watched', { email, title, isWatched })
    },

    setRating: function (email, title, rating) {
        return axios.put('rating', { email, title, rating })
    }

}

export default API;