const router = require("express").Router();
//const app = express();
const profileController = require("../../controllers/profileController");

//Populating collection page
router.route("/userProfile/:googleId").get(profileController.userProfile);

//Add movie to user DB
router.route("/userProfileAdd").post(profileController.addMovieToProfile);

//Updates movie to watched on user collection
router.route("/watched").put(profileController.updateMovietoWatched);

module.exports = router;
