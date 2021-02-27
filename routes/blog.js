const router = require('express').Router();
const blogController = require('../controllers/blogController');
const uploadImage = require('../utils/fileUpload');

const { isUserLoggedIn } = require('../utils/ensureAuth');

router
    .route('/')
    .get(blogController.getBlogs)
    .post(isUserLoggedIn, uploadImage.single('bannerImage'), blogController.postBlog)
    .delete(isUserLoggedIn, blogController.deleteBlog);

router
    .route('/search')
    .get(blogController.getBlogByTags);

router
    .route('/:id')
    .get(blogController.getSingleBlog);

router
    .route('/comment')
    .post(isUserLoggedIn, blogController.commentBlog)
    .delete(isUserLoggedIn, blogController.deleteComment);

router
    .route('/clap')
    .post(isUserLoggedIn, blogController.clapBlog);

module.exports = router;