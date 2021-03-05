
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    watchedMovies: [
        {
           type: Schema.Types.ObjectId,
           ref: "Movie"
        }
    ],
    unwatchedMovies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Movie"
        }
    ]
})

const User = mongoose.model("User", userSchema);

module.exports = User;