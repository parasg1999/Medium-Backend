const jwt = require('jsonwebtoken');
const util = require('util');
const User = require('../models/User');

const verifyJWTPromise = util.promisify(jwt.verify);

const isUserLoggedIn = (req, res, next) => {
    let token = req.header('Authorization');

    if (typeof token === 'undefined') {
        return res.status(401).send();
    }

    verifyJWTPromise(token, process.env.JWT_SECRET)
        .then(({ id }) => User.findById(id))
        .then(user => {
            if (user) {
                req.user = user;
                return next();
            }
            return res.status(401).send();
        })
        .catch(() => res.status(401).send());
};

isUserVerified = (req, res, next) => {
    if (req.user.isRegistered) {
        next();
    } else {
        res.redirect('/user/moreDetails');
    }
}


module.exports = { isUserLoggedIn };