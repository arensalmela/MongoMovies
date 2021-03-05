const passport = require('passport');
const LocalStrategy =require('passport-local');
const db = require('../models');

passport.use(new LocalStrategy(
    function(username, password, done){
        db.User.findOne({
            where: {
                username: username
            }
        }).then(dbUser => {
            if (!dbUser) {
                return done(null, false, {message: ""})
            }
        })
    }
))