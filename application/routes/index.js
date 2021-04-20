var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',{title:"HomePage"});
});

router.get('/login',(req, res, next) => {
  res.render('login',{title:"Login"});
})

router.get('/registration',(req, res, next) => {
  res.render('registration',{title:"Registration"});
})

router.get('/postimage',(req, res, next) => {
  res.render('postimage',{title:"PostImage"});
})

router.get('/imagepost',(req, res, next) => {
  res.render('postimage',{title:"Image Posted"});
})
module.exports = router;
