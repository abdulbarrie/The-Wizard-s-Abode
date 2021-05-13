var express = require('express');
var router = express.Router();
var db = require('../conf/database');
/**If something goes wrong with this file, check these two lines of 
 * code and replace them with what the professor wrote. */
var errorPrint = require('../helpers/debug/debugprinters').errorPrint;
var successPrint = require('../helpers/debug/debugprinters').successPrint;
const { create } = require('../models/comments');


router.post('/create', (req, res, next) => {
    console.log(req.body);
    res.json("we got your comment");
})

module.exports = router;