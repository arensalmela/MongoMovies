const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const userController = require('../../controllers/userController');

//adding new user to db
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        userController.create({
            fullName: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        //redirect to user home?
    } catch {
        //error handling
    }
})