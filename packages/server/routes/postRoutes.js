const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { checkAdmin } = require("../middleware/auth");

router.post("/createPost", checkAdmin, postsController.createPost);
router.put("/editPost/:id", checkAdmin, postsController.editPost);

module.exports = router;
