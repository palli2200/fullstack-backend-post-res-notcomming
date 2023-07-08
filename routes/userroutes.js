var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json('we are in getdata method');
});

router.post('/', (req, res) => {
  // res.json(req.body);  // here response in notcomming to front end
  res.json("we are in post data methos");

});

module.exports = router;
