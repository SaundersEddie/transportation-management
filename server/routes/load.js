// Our Routes load
// const express = require('express');
const router = require('express').Router();
const loadController = require ('../controllers/loadController')

// import {allLoads, createLoad} from '../controllers/loadController.js';
// const router = express.Router();

router.get ('/', allLoads);
router.post ('/', createLoad);

module.exports = router;
