var express = require('express');
var router = express.Router();
var db = require('../conf/database');
/**If something goes wrong with this file, check these two lines of 
 * code and replace them with what the professor wrote. */
var errorPrint = require('../helpers/debug/debugprinters').errorPrint;
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
var PostModel = require('../models/Posts');
var PostError = require('../helpers/error/PostError');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images/uploads");
    },
    filename: function(req, file, cb) {
        let fileExt = file.mimetype.split('/')[1];
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, `${randomName}.${fileExt}`);
    } 
});

var uploader = multer({storage: storage});

router.post('/createPost', uploader.single("newimage"),(req, res, next) => {
    let fileUploaded = req.file.path;
    let fileAsThumbnail = `thumbnail-${req.file.filename}`;
    let destinationOfThumbnail = req.file.destination + "/" + fileAsThumbnail;
    let title = req.body.title;
    let description = req.body.description;
    let bw_userId = req.session.userId;

    /**
     * do server validation on your own
     * not do in video must do on your own
     * if any values that used for the insert statement
     * are undefined, mysql.query or execute will fail
     * with the following error:
     * BIND parameters cannot be undefined
     */

    sharp(fileUploaded).resize(200).toFile(destinationOfThumbnail).then(() => {
        return PostModel.create(
        title, description, fileUploaded, destinationOfThumbnail, bw_userId);
    })
    .then((postWasCreated) => {
        if(postWasCreated) {
            req.flash('success', "The domain has obtained your post. Good work, wizard!");
            res.redirect('/');
        } else {
            throw new PostError('Post could not be created.', '/postimage', 200);
        }
    })
    .catch((err) => {
        if (err instanceof PostError) {
            errorPrint(err.getMessage());
            req.flash('error', err.getMessage());
            res.status(err.getStatus());
            res.redirect(err.getRedirectURL());
        } else {
            next(err);
        }
    })
});

//localhost:3000/posts/search?search=value
router.get("/search", async (req, res, next) => {
    try {
    let searchTerm = req.query.search;
    if (!searchTerm) {
        res.send({
            message: "No search term given.",
            results: []
        });
    } else {
        let results = await PostModel.search(searchTerm);   
        if (results.length == 1) {      
            res.send({  
                message: `${results.length} result found.`,   
                results: results,
                });
        } else if (results.length > 1) {
                res.send({  
                message: `${results.length} results found.`,   
                results: results,
                });
        } else {
            let results = await PostModel.getNRecentPosts(8);
                res.send({
                    message: "No results were found for your search. However, here's the 8 most recent magical posts " +  
                    "from our fellow wizards.",
                    results: results,
                });
            }
        }
    } catch (err) {
        next(err);
}});

module.exports = router;