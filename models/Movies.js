const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type: String},
    poster: {type: String},
    released: {type: String},
    overview: {type: String},
    watched: {type: Boolean}
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;