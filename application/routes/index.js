var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
var getRecentPosts = require('../middleware/postsmiddleware').getRecentPosts;

/* GET home page. */
router.get('/', getRecentPosts, function(req, res, next) {
  res.render('home',{title:"The Wizard's Column - The Wizard's Abode"});
});

router.get('/login',(req, res, next) => {
  res.render('login',{title:"Login - The Wizard's Abode"});
})

router.get('/registration',(req, res, next) => {
  res.render('registration',{title:"Registration - The Wizard's Abode"});
})

router.use('/postimage', isLoggedIn);
router.get('/postimage', (req, res, next) => {
  res.render('postimage',{title:"Post a New Image - The Wizard's Abode"});
})

router.get('/imagepost',(req, res, next) => {
  res.render('imagepost',{title:"Image of the Day - The Wizard's Abode"});
})

module.exports = router;
