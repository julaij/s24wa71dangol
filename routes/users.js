var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  factor += 1;
  product *= factor;
  res.send(`Product is ${product}`);
});

var product = 1;
var factor = 1;


module.exports = router;
