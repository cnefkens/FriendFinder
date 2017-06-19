var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');


// Set our port to 8080
var PORT = 8080;

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starts our server.
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});