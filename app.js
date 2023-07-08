var express = require('express');
var app = express();
var mongoose = require('mongoose');
var userschema = require('./models/usermodel')
var cors = require('cors');
app.use(cors());

var userdetailsrouter = require('./routes/userroutes');
app.use('/getdata', userdetailsrouter);
app.use('/postdata', userdetailsrouter);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/formdatabase')
  .then(() => {
    console.log("DB connected successfully....");
  })
  .catch((err) => {
    console.log("Unable to connect to the DB....");
    console.error(err);
  });

app.listen(3000, (err) => {
  if (!err) {
    console.log("App is listening on port 3000....");
  } else {
    console.log("App crashed....");
    console.error(err);
  }
});
