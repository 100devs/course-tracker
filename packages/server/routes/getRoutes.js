const express = require("express");
const router = express.Router();
const getController = require("../controllers/get");

// got rid of checkAdmin middleware
router.get("/all-posts", getController.allPosts);
router.get("/published", getController.published);
router.get("/admin-status/:id", getController.getAdminStatus);

module.exports = router;
