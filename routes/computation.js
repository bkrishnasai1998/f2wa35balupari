var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var ran=Math.random();
    res.render('computation', { value: `math.cos() applied to ${ran} is ${Math.cos(ran)}`,
    value1: `math.asin() applied to ${ran} is ${Math.asin(ran)}` ,
    value2: `math.asinh() applied to ${ran} is ${Math.asinh(ran)}` });
  }
  else{

    for (let i in req.query) {

      console.log(i)

      res.render('computation', { value: `math.cos() applied to ${req.query[i]} is ${Math.cos(req.query[i])}`,
      value1: `math.asin() applied to ${req.query[i]} is ${Math.asin(req.query[i])}` ,
      value2: `math.asinh() applied to ${req.query[i]} is ${Math.asinh(req.query[i])}` })

    }
  }


});


module.exports = router;