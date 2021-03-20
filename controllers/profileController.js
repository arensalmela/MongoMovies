
const db = require("../models");


//Define methods for movieController


module.exports = {
  userProfile: function (req, res) {
    db.User.findOne({ googleId: req.params.googleId }).then((data) =>
      res.json(data)
    );
  },
  addMovieToProfile: function (req, res) {
    db.User.updateOne(
      { email: req.body.email },
      {
        $push: {
          movies: {
            title: req.body.title,
            poster_path: req.body.poster_path,
            release_date: req.body.release_date,
            overview: req.body.overview,
            id: req.body.id,
            watched: false,
          },
        },
      }
    ).then((data) => res.json(data));
  },

  updateMovietoWatched: function (req, res) {
    console.log(req.body);
    db.User.updateOne(
      { email: req.body.email, "movies.title": req.body.title },
      {
        $set: {
          "movies.$.watched": req.body.isWatched,
        },
      }
    )
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },

  rating: function (req, res) {
    console.log(req.body);
    db.User.updateOne(
      { email: req.body.email, "movies.title": req.body.title },
      {
        $set: {
          "movies.$.rating": req.body.rating,
        },
      }
    )
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },
};
