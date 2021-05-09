var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
var getRecentPosts = require('../middleware/postsmiddleware').getRecentPosts;
var db = require('../conf/database');

/* GET home page. */
router.get('/', getRecentPosts, function(req, res, next) {
  res.render('home',{title:"The Wizard's Column - The Wizard's Abode"});
});

router.get('/login',(req, res, next) => {
  res.render('login',{title:"Login - The Wizard's Abode"});
});

router.get('/registration',(req, res, next) => {
  res.render('registration',{title:"Registration - The Wizard's Abode"});
});

router.use('/postimage', isLoggedIn);
router.get('/postimage', (req, res, next) => {
  res.render('postimage',{title:"Post a New Image - The Wizard's Abode"});
});

router.get('/imagepost',(req, res, next) => {
  res.render('imagepost',{title:"Image of the Day - The Wizard's Abode"});
});

router.get('/post/:id(\\d+)', (req, res, next) => {
 let baseSQL = "SELECT u.id, u.username, p.title, p.description, p.photopath, p.created \
 FROM users u JOIN posts p ON u.id=bw_userid WHERE p.id=?;"

 let postId = req.params.id;
 db.execute(baseSQL,[postId]).then(([results, fields]) => {
   if (results && results.length) {
    let post = results[0];
    res.render('imagepost', {currentPost: post});
   } else {
     req.flash('error','This is not the post you are looking for!');
     res.redirect('/');
   }
 })

});

router.get('/post/help', (req, res, next) => {
  res.send({literal: "literal help"});
});

module.exports = router;
