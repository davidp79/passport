// Dependencies
// =============================================================
var app = require('./app')

// Sets up the Express App
// =============================================================
var PORT = 3000;

// Sets up the Express app to handle data parsing

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    return res.json('hello')
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});