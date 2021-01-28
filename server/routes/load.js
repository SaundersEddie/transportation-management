// Our Routes load

import express from 'express';
import {allLoads, createLoad} from '../controllers/loadController.js';
const router = express.Router();

router.get ('/', allLoads);
router.post ('/', createLoad);

// Matches with "/api/loads"
// router.route("/")
  // .get(loadsController.findAll)
  // .post(loadsController.createLoad);

  // Matches with "/api/loads/:id"
//  router.route("/:id")
  // .get(loadsController.findById);

  // router.route("/:id")
  // .put(loadsController.addComment);

export default router;
