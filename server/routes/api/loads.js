// const router = require("express").Router();
// const loadsController = require("../../controllers/loadsController");

import express from 'express';
import {findAll, createLoad} from '../../controllers/loadsController';

const router=express.Router();

router.get ('/', findAll);
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

module.exports = router;
