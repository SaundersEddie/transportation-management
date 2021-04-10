const router = require('express').Router();
const loadController = require ('../controllers/loadController')

router.get ('/', loadController.allLoads);
router.post ('/', loadController.createLoad);

module.exports = router;
