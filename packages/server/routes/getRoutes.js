const express = require("express");
const router = express.Router();
const getController = require("../controllers/get");
const { checkAdmin } = require("../middleware/auth");

// URL paths should be in shish-kebab-case
router.get("/all-posts", checkAdmin, getController.allPosts);
router.get("/published", getController.published);
router.get("/post/:id", getController.postById);
router.get("/admin-status/:id", getController.getAdminStatus);


module.exports = router;
