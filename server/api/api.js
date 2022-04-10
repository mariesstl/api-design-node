var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/users', require('./users/userRoutes'));
router.use('/students', require('./students/studentRoutes'));
router.use('/tutors', require('./tutors/tutorRoutes'));
router.use('/tests', require('./tutors/tutorRoutes'));
router.use('/pairs', require('./pairs/pairRoutes'));
router.use('/reports', require('./reports/reportRoutes'));
router.use('/sessions', require('./sessions/sessionRoutes'));

// console.log(router)
module.exports = router;
