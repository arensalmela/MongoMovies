const router = require("express").Router();
//const app = express();
const profileController = require("../../controllers/profileController");

//Populating trending page
router.route("/userProfile/:email").get(profileController.userProfile);

//Add movie to user DB
router.route("/userProfileAdd").post(profileController.addMovieToProfile);

//Updates movie to watched on user collection
router.route("/watched").post(profileController.updateMovietoWatched);

module.exports = router;
