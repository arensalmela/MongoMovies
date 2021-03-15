//Referenced activity 21.05
const movieRoutes = require("./routes/api/movie-routes");
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes/api/user-routes");
const profileRoutes = require("./routes/api/profile-routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

app.get("/apiKey", (req, res) => {
  res.json(process.env.APIkey);
});

app.use(routes);
app.use(movieRoutes);
app.use(profileRoutes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MongoMovies",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
