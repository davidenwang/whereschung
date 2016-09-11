var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var Chung = require('./app/models/chung.js');
var bodyParser = require('body-parser');

var routes = require('./app/routes.js');

app.use(bodyParser.json());

mongoose.connect('mongodb://admin:admin@ds029466.mlab.com:29466/heroku_z8wq79p5');

app.use(express.static(path.join(__dirname, '/public/views')));

app.use('/data/', routes);

app.get('/', function(req, res)
{
  res.sendFile(path.join(__dirname, '/public', '/views/index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Server is starting on port 3000")
