const router = require("express").Router();
const loadsController = require("../../controllers/loadsController");

// Matches with "/api/loads"
router.route("/")
  .get(loadsController.findAll)
  .post(loadsController.create);

  // Matches with "/api/loads/:id"
 router.route("/:id")
  .get(loadsController.findById);

  router.route("/:id")
  .put(loadsController.addComment);

module.exports = router;
