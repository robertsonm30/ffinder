// Dependencies
// ===========================================================
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path")
var app = express();
var PORT = 3000;
// Middleware
// ===========================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes
// ===========================================================
app.get('/survey',function(req,res){
  res.sendfile("survey.html");
});

app.get('/',function(req,res){
  res.sendfile("home.html");
});

app.get('/api/friends',function(req,res){
  res.sendfile("friends.json");
});

app.post('/api/friends',function(req,res){
  // Need to add functionality here
  // var user_name=req.body.user;
  // var password=req.body.password;
  // console.log("User name = "+user_name+", password is "+password);
  // res.end("yes");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});