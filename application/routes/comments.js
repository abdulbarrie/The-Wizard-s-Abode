var express = require('express');
var router = express.Router();
var db = require('../conf/database');
/**If something goes wrong with this file, check these two lines of 
 * code and replace them with what the professor wrote. */
var errorPrint = require('../helpers/debug/debugprinters').errorPrint;
var successPrint = require('../helpers/debug/debugprinters').successPrint;
const { create } = require('../models/comments');


router.post('/create', (req, res, next) => {

    if (!req.session.username) {
        errorPrint("Halt, you rogue wizard! You must be logged in to comment in this domain!");
        res.json({
            code: -1,
            status:"danger",
            message:"Halt, you rogue wizard! You must be logged in to comment in this domain!"
        });
    } else {
        let {comment, postId} = req.body;
        let username = req.session.username;
        let userId = req.session.userId;
    
        create(userId, postId, comment)
        .then((wasSuccessful) => {
        if (wasSuccessful !== -1) {
            successPrint(`comment was created for ${username}`);
            res.json({
                code: 1,
                status:"success",
                message:"comment created!",
                comment: comment,
                username: username
            })
        } else {
            errorPrint('comment was not saved');
            res.json({
                code: -1,
                status:"danger",
                message:"comment was not created"
            })
        }
    })
    .catch((err) => next(err));

    }
   

})

module.exports = router;