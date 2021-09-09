const router = require('express').Router();
const postRoutes = require('./postRoutes')

router.use('/post', postRoutes)

router.use('/admin', authRoutes);

module.exports = router;
