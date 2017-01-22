//test

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

//setting view engine to ejs
app.set('view engine', 'ejs');

//public folder to store assets ???
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//routes

// check if logged in
app.all('*', (req, res, next) => {
  console.log('Checking if logged in');
  // replace if(true) with some login checking code
  if (true){
    next();
  }else{
    res.status(401).send('Not Logged In');
  }
});

app.get('/', (req, res) => {
  var data = {
    text: '',
    title: 'New Note'
  };
  res.render('pad', {
    data: data
  });
});

// save my note (needs to be hooked up to a database, just console logs the note for now)
app.post('/', upload.array(), (req, res) => {
  var data = {
    note: req.body.note,
    title: req.body.title
  };
  console.log(data);
  res.render('pad', {
    data: data
  });
});

//delete note (just clears form and console logs for now)
app.post('/delete', (req, res) => {
  console.log('Deleted note!');
  res.redirect('/');
});

// catch all other requests and deny them
app.all('*', (req, res) => {
  console.log('Accessing the secret section ...');
  res.status(403).send('Nice Try! ;)');
});

//listen on port
const port = process.env.PORT || 8000;
app.listen(port);

console.log("Server listening on port: " + port);
