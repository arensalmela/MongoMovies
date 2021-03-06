const router = require('express').Router();
//const app = express();
const userController = require('../../controllers/userController');

//adding new user to db
router.route('/login').post(
    userController.create
)

module.exports = router;