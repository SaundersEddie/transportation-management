const router = require('express').Router()
const loadsRoutes = require('./loads')
const userInfoRoute = require('./user');

// Reviews routes
router.use('/loads', loadsRoutes)

// // User routes
router.use('/user', userInfoRoute)

module.exports = router
