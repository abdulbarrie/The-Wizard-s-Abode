var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{name:"a god"});
});

router.get('/login',(req, res, next) => {
  res.render("login");
})
module.exports = router;
