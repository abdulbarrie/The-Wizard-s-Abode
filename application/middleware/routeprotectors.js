const { successPrint, errorPrint } = require("../helpers/debug/debugprinters");
const routeProtectors = {};

routeProtectors.userIsLoggedIn = function(req, res, next) {
    if (req.session.username) {
        successPrint('User is logged in.');
        next();
    } else {
        errorPrint('User is not logged in!');
        req.flash('error', 'Halt, you rogue wizard! You must enter the domain first to create a new post!');
        res.redirect('/login');
    }
}


module.exports = routeProtectors;