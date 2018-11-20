const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auth = require('./apis/auth.js');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const passport = require('passport');




//Body Parser middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//CONNECT  TO MONGODB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


//Passport Middleware
app.use(passport.initialize());


//Passport Config
require('./config/passport.js')(passport);

//USE ROUTES
app.use('/apis/auth', auth);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));






















































// // Dependencies
// // =============================================================
// const app = require('./app')

// // Sets up the Express App
// // =============================================================
// const PORT = 3000;

// // Sets up the Express app to handle data parsing

// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function (req, res) {
//   return res.json('hello')
// });


// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function () {
//   console.log("App listening on PORT " + PORT);
// });

