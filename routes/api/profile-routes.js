const router = require("express").Router();
//const app = express();
const profileController = require("../../controllers/profileController");

//Populating trending page
router.route("/userProfile").get(profileController.userProfile);
router.route("/userProfileAdd").post(profileController.addMovieToProfile);

module.exports = router;
