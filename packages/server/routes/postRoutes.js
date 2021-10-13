const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { checkAdmin } = require("../middleware/auth");

// URL paths should be in shish-kebab-case
router.post("/create-post", checkAdmin, postsController.createPost);
router.put("/edit-post/:id", checkAdmin, postsController.editPost);
router.delete("/delete-post/:id", checkAdmin, postsController.deletePost);

module.exports = router;
