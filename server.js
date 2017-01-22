//test

const express = require('express');
const app = express();

//setting view engine to ejs
app.set('view engine', 'ejs');

//public folder to store assets ???
app.use(express.static(__dirname + '/public'));

//routes
app.get('/', (req, res) => {
  res.render('pad');
});

//listen on port
const port = process.env.PORT || 8000;
app.listen(port);

console.log("Server listening on port: " + port);
