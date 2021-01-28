// Our Routes user

import express from 'express';
import { getUsers, addUser } from '../controllers/userController.js';
const router = express.Router();

// const userController = require("../../controllers/userController");

router.get('/', getUsers);
router.post('/', addUser);

//Matches with "/api/user"
// router.route("/")
  // .put(userController.updateUser);

// router.route("/users")
  // .get(userController.getUsers);

// Matches with "/api/user/:userName"
// router.route("/:userName")
  // .get(userController.getUserInfo);

export default router;
  