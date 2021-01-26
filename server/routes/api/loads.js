const router = require("express").Router();
const loadssController = require("../../controllers/loadsController");

// Matches with "/api/loads"
router.route("/")
  .get(reviewsController.findAll)
  .post(reviewsController.create);

  // Matches with "/api/loads/:id"
 router.route("/:id")
  .get(reviewsController.findById);

  router.route("/:id")
  .put(reviewsController.addComment);

module.exports = router;
