var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.listen(PORT, function(err) {
    
    if(err) throw err;
    console.log(`server running on port ${PORT}`)
})
app.get("/", function(req, res) {
    res.json({Hello: "World"})
})