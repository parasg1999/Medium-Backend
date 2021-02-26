const router = require('express').Router();
const blogController = require('../controllers/blogController');

const { isUserLoggedIn } = require('../utils/ensureAuth');

router
    .route('/')
    .post(isUserLoggedIn, blogController.postBlog);

router
    .route('/:id')
    .get(blogController.getBlog);

router
    .route('/comment')
    .post(isUserLoggedIn, blogController.commentBlog);

router
    .route('/clap')
    .post(isUserLoggedIn, blogController.clapBlog);

module.exports = router;