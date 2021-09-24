const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.post("/create-post", postsController.createPost);
router.put("/edit-post/:id", postsController.editPost);

module.exports = router;
