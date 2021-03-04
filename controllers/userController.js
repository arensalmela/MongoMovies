const db = require('../models/User');

//Define methods for userController

module.exports = {
   create: function(req, res) {
       db.User
        .create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(422).json(err));
   }
}