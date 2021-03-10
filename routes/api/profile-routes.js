const router = require("express").Router();
//const app = express();
const profileController = require("../../controllers/profileController");

//Populating trending page
router.route("/userProfile/:email").get(profileController.userProfile);
router.route("/userProfileAdd").post(profileController.addMovieToProfile);

module.exports = router;
