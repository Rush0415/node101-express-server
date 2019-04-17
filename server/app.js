// import files and packages up here    
var SdTopSpotsData = require ("./data.json")
// create your express server below
var express = require ("express");
var morgan = require ("morgan");
var app = express ();
// add your routes and middleware below
app.use (morgan("dev"));
app.get ("/", function(req, res){
    res.status (200).send("West Side"); 
});
app.get("/data",function(req, res){
    res.status (200).send(SdTopSpotsData);
});
// finally export the express application
module.exports = app;
