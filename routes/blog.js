const router = require('express').Router();
const blogController = require('../controllers/blogController');
const uploadImage = require('../utils/fileUpload');

const { isUserLoggedIn } = require('../utils/ensureAuth');

router
    .route('/')
    .post(isUserLoggedIn, uploadImage.single('bannerImage'), blogController.postBlog);

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