//test

var express = require('express');
var app = express();

//setting view engine to ejs
app.set('view engine', 'ejs');

//public folder to store assets ???
app.use(express.static(__dirname + '/public'));

//routes
app.get('/', function(req, res) {
  res.render('pad');
});

//listen on port
var port = process.env.PORT || 8000;
app.listen(port);
