var express = require('express');
var router = express.Router();
var db = require('../conf/database');
var UserError = require('../helpers/error/UserError');
var errorPrint = require('../helpers/debug/debugprinters').errorPrint;
var successPrint = require('../helpers/debug/debugprinters').successPrint;
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req, res, next) => {
  let username = req.body.uname;
  let email = req.body.email;
  let password = req.body.pword;
  let cpassword = req.body.conpword;

  /**
   * do server side validation
   * not done in video must do on your own
   */

  db.execute("SELECT * FROM users WHERE username=?", [username])
  .then(([results, fields]) => {
    if( results && results.length == 0) {
      return db.execute("SELECT * FROM users WHERE email=?", [email]);
    } else {
      throw new UserError (
        "Registration Failed: Username already exists",
        "/registration",
        200
      );
    }
   })
   .then(([results, fields]) => {
    if(results && results.length == 0) {
      return bcrypt.hash(password,15);
    } else {
      throw new UserError(
        "Registration Failed: Email already exists",
        "/registration",
        200
      );
    }
   })
   .then((hashedPassword) => {
    
      let baseSQL = "INSERT into users (username, email, password, created) VALUES (?,?,?,now());"
      return db.execute(baseSQL,[username, email, hashedPassword])
   
   })
   .then(([results, fields]) => {
     if(results && results.affectedRows) {
        successPrint("User.js --> User was created!!");
        res.redirect('/login');
     } else {
       throw new UserError(
         "Server Error, user could not be created",
         "/registration",
         500
       );
     }
   })
   .catch((err) => {
    errorPrint("User could not be made", err);
     if (err instanceof UserError) {
        errorPrint(err.getMessage());
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL());
     } else {
       next(err);
     }
   });
});

router.post('/login', (req, res, next) => {
  let username = req.body.uname;
  let password = req.body.pword;

  let baseSQL = "SELECT username, password FROM users where username=?;"
  db.execute(baseSQL,[username])
  .then(([results, fields]) => {
    if (results && results.length == 1) {
        let hashedPassword = results[0].password;
        return bcrypt.compare(password, hashedPassword);
      } else {
        throw new UserError("invalid username and/or password!", "/login", 200);
    }
  })
  .then((passwordsMatched) => {
    if (passwordsMatched) {
      successPrint(`User ${username} is logged in`);
      res.locals.logged = true;
      res.redirect('/');
    } else {
      throw new UserError("invalid username and/or password!", "/login", 200);
    }
  })
  .catch((err) => {
    errorPrint("user login failed");
    if (err instanceof UserError) {
      errorPrint(err.getMessage());
      res.status(err.getStatus());
      res.redirect('/login');
    } else {
      next(err);
    }
  })


})
module.exports = router;


