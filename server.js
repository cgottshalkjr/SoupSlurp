//requiring express dependency
var express = require("express");

//variable holding express functions
var app = express();

//establing port or defaulting to a set port
var PORT = process.env.PORT || 3000

//serving static files so you can view images, custom ccs, etc.
app.use(express.static("public"));





//creating port connection
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});


