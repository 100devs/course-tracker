const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { checkAdmin } = require("../middleware/auth");

<<<<<<< HEAD
router.post("/createPost", checkAdmin, postsController.createPost);
router.put("/editPost/:id", checkAdmin, postsController.editPost);
=======
router.post("/create-post", postsController.createPost);
router.put("/edit-post/:id", postsController.editPost);
>>>>>>> dcab7fe (updated client and server paths to shish-kebab-case)

module.exports = router;
