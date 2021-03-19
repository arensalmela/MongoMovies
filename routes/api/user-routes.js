const router = require("express").Router();
const path = require("path");
//const app = express();
const userController = require("../../controllers/userController");

//adding new user to db
router.route("/login").post(userController.create);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
