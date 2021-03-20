const router = require("express").Router();
const profileController = require("../../controllers/profileController");

//Populating collection page
router.route("/userProfile/:googleId").get(profileController.userProfile);

//Add movie to user DB
router.route("/userProfileAdd").post(profileController.addMovieToProfile);

//Updates movie to watched on user collection
router.route("/watched").put(profileController.updateMovietoWatched);

router.route("/rating").put(profileController.rating);

module.exports = router;
