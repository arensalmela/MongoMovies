const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  googleID: { type: String, required: true },
  movies: [
    {
      title: { type: String },
      poster_path: { type: String },
      release_date: { type: String },
      overview: { type: String },
      id: { type: String },
      watched: { type: Boolean },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
