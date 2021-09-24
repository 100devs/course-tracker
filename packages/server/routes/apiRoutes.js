const router = require("express").Router();
const postRoutes = require("./postRoutes");
const authRoutes = require("./authRoutes");
const getRoutes = require("./getRoutes");

router.use("/post", postRoutes);

router.use("/auth", authRoutes);

router.use("/get", getRoutes);


module.exports = router;
