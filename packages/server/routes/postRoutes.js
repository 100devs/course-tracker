const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.post("/createPost", postsController.createPost);
router.put("/editPost/:id", postsController.editPost);

module.exports = router;
