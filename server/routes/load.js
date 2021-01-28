// Our Routes load

import express from 'express';
import {allLoads, createLoad} from '../controllers/loadController.js';
const router = express.Router();

router.get ('/', allLoads);
router.post ('/', createLoad);

export default router;
