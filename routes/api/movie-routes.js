const router = require('express').Router();
//const app = express();
const moviesController = require('../../controllers/moviesController');

//adding new user to db
router.route('/trending').get(
    moviesController.trending
)

module.exports = router;