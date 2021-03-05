const express = require('express');
const app = express();
const userController = require('../../controllers/userController');

//adding new user to db
app.post('/login', async (req, res) => {
    try {

        userController.create({
            name: req.body.givenName,
            email: req.body.email,
            googleId: req.body.googleId
        })
        //redirect to user home?
    } catch {
        //error handling
    }
})