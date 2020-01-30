var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let date = new Date();
  res.render('index', {
    title: 'Express!!!',
    name: "Lindsey Mason",
    favTv: "Goblin Slayer",
    currVG: "Horizon",
    school: "Edge Tech",
    pos: "Positivity",
    free: "Free",
    smile: "Smile",
    date: date
  });
});




module.exports = router;