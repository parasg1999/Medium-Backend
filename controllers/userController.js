const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { validateRegisterInput } = require('../validators');

module.exports = {
    getUser: (req, res, next) => {
        User.findById(req.params.id)
        .populate('followers', 'name email _id')
        .populate('following', 'name email _id')
            .then(user => {
                if (!user) {
                    return res.status(404).send({ error: 'No user found' })
                }
                res.send(user)
            })
            .catch(err => res.status(400).send(err))

    },

    createUser: (req, res, next) => {
        const { errors, isValid } = validateRegisterInput(req.body);

        if (!isValid) return res.status(400).send({ errors });

        const { name, email, password } = req.body;

        const profileImage = req.file ?
            `/uploads/${req.file.filename}` :
            undefined

        let newUser = new User({
            name, email, password, profileImage,
        });

        bcrypt.genSalt(10)
            .then(salt => bcrypt.hash(newUser.password, salt))
            .then(hash => {
                newUser.password = hash;
                return newUser.save()
            })
            .then(user => res.send(user))
            .catch(err => res.status(400).send(err))
    },

    loginUser: (req, res, next) => {
        const { errors, isValid } = validateLoginInput(req.body);

        if (!isValid) return res.status(400).send({ errors });

        const { email, password } = req.body;
        let scopeVariable = {};
        User.findOne({ email })
            .then(user => {
                if (!user) {
                    throw new Error('Incorrect Credentials');
                }

                scopeVariable.user = user;
                return bcrypt.compare(password, user.password)
            })
            .then(isMatch => {
                if (!isMatch) {
                    throw new Error('Incorrect Credentials');
                }
                const payload = {
                    id: scopeVariable.user._id
                };

                return jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: 86400 // One day
                })
            })
            .then((token) => res.send({ token }))
            .catch(err => res.status(400).send(err.toString()));
    },

    deleteUser: (req, res, next) => {
        if (req.body.id == req.user._id) {
            User.findByIdAndDelete(req.body.id)
                .then(doc => res.send(doc))
                .catch(err => res.status(400).send(err));
        } else {
            return res.status(403).send()
        }
    },

    followUser: (req, res, next) => {
        if (req.user._id == req.body.id) {
            return res.status(400).send()
        }

        User.findByIdAndUpdate(
            req.body.id,
            { $addToSet: { followers: req.user._id } },
            { new: true }
        )
            .then((followingUser) => {
                if (!followingUser) {
                    throw new Error('No such user');
                }
                return User.findByIdAndUpdate(
                    req.user._id,
                    { $addToSet: { following: req.body.id } }
                )
            })
            .then(user => res.send({ success: true }))
            .catch(err => res.status(400).send(err))
    },

    unfollowUser: (req, res, next) => {
        if (req.user._id == req.body.id) {
            return res.status(400).send()
        }

        User.findByIdAndUpdate(
            req.body.id,
            { $pull: { followers: req.user._id } },
            { new: true }
        )
            .then((followingUser) => {
                if (!followingUser) {
                    throw new Error('No such user');
                }
                return User.findByIdAndUpdate(
                    req.user._id,
                    { $pull: { following: req.body.id } }
                )
            })
            .then(user => res.send({ success: true }))
            .catch(err => res.status(400).send(err))
    },
}