const router = require('express').Router();
const userController = require('../controllers/userController');

const { isUserLoggedIn } = require('../utils/ensureAuth');
const uploadImage = require('../utils/fileUpload');

/**
 * @route POST /user/register
 * @param name
 * @param email
 * @param password
 * @param profileImage
 * @desc Register user
 */
router
    .route('/register')
    .post(uploadImage.single('profileImage'), userController.createUser);

/**
 * @route GET /user/:id
 * @param id User ID 
 * @desc Get user details
 */
router
    .route('/:id')
    .get(userController.getUser);

router
    .route('/login')
    .post(userController.loginUser)

router
    .route('/follow')
    .post(isUserLoggedIn, userController.followUser)

router
    .route('/unfollow')
    .post(isUserLoggedIn, userController.followUser)


module.exports = router;