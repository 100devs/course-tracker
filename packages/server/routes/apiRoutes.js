const router = require('express').Router();
const postRoutes = require('./postRoutes')

router.use('/post', postRoutes)

module.exports = router;
