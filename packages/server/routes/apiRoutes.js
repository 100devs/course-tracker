const router = require("express").Router();
const authRoutes = require("./authRoutes");

router.use("/admin", authRoutes);

module.exports = router;
