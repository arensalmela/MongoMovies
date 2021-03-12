const router = require("express").Router();
//const app = express();
const moviesController = require("../../controllers/moviesController");

//Populating trending page
router.route("/trending").get(moviesController.trending);

//Populates trending page with search criteria
router.route("/search/:query").get(moviesController.search);

module.exports = router;
