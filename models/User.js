const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  googleID: { type: String, required: true },
  movies: [
    {
      title: { type: String },
      poster: { type: String },
      released: { type: String },
      overview: { type: String },
      apiID: { type: String },
      watched: { type: Boolean },
      runtime: { type: String },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
