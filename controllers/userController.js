const db = require("../models");

//Define methods for userController

module.exports = {
  //new user - write google info to database

  create: function (req, res) {
    //console.log(req.body)
    db.User.findOneAndUpdate(
      { email: req.body.email },
      {
        name: req.body.givenName,
        email: req.body.email,
        googleId: req.body.googleId,
      },
      { upsert: true }
    )
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(422).json(err));
  },
};
