const router = require("express").Router();
const userController = require("../../controllers/userController");

//Matches with "/api/user"
router.route("/")
  .put(userController.updateUser);

router.route("/users")
  .get(userController.getUsers);

// Matches with "/api/user/:userName"
router.route("/:userName")
  .get(userController.getUserInfo);

  module.exports = router;
  