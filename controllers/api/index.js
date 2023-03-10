const router = require('express').Router();

const userRoutes = require('./user-routes');
const dashboardRoutes = require('./dashboard-routes');
const postRoutes = require('./postRoutes')
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);


module.exports = router;
