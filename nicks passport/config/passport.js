const JWTStrategy = require("passport-jwt").Strategy;
const mongoose = require("mongoose");
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User = mongoose.model("user");
const keys = require("../config/keys");


const opts = {}
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secret

module.exports = (passport) => {
    passport.use(new JWTStrategy(
        opts, (jwtPayload, done) => {
            User.findById(jwtPayload.id)
                .then(user => {
                    if (user) {
                        return done(null, user)
                    }
                    return done(null, false)
                })
                .catch(err =>
                    console.log(err)
                )
        })
    )
}




// const LocalStrategy = require('passport-local').Strategy;
// const JWTStrategy = passportJWT.Strategy;

// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password'
// },
//     function (email, password, cb) {

//         //Assume there is a DB module pproviding a global UserModel
//         return UserModel.findOne({ email, password })
//             .then(user => {
//                 if (!user) {
//                     return cb(null, false, { message: 'Incorrect email or password.' });
//                 }

//                 return cb(null, user, {
//                     message: 'Logged In Successfully'
//                 });
//             })
//             .catch(err => {
//                 return cb(err);
//             });
//     }
// ));