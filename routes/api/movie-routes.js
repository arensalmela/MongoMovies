const router = require("express").Router();
//const app = express();
const moviesController = require("../../controllers/moviesController");

//Populating trending page
router.route("/trending").get(moviesController.trending);

router.route("/search").get(moviesController.search);

module.exports = router;
