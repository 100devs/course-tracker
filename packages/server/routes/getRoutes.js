const express = require("express");
const router = express.Router();
const getController = require("../controllers/get");
const { checkAdmin } = require("../middleware/auth");

router.get("/all-posts", checkAdmin, getController.allPosts);
router.get("/published", getController.published);
router.get("/post/:id", getController.postById);

module.exports = router;
