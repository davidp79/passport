const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bCrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("../config/passport");

//initial test route
router.get("/test", (req, res) => res.json({
    msg: "auth works"
}))

// registration route
router.post("/register", (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                errors.email = "email already exist"
                return res.status(400).json({ errors })

            } else {
                //keys may change
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    userName: req.body.userName,
                    password: req.body.password,
                    email: req.body.email,
                })
                // this is where the hashing of the password happens
                bCrypt.genSalt(10, (err, salt) => {
                    bCrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash;
                        newUser.save().then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

module.exports = router