const Post = require("../models/Post");

module.exports = {
  createPost: async (req, res) => {
    const { title, body, isDraft } = req.body;

    try {
      const post = await Post.create({
        title: title,
        body: body,
        isDraft: isDraft,
      });

      res.json({ message: "Post Created!", post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  editPost: async (req, res) => {
    const { title, body, isDraft } = req.body;
    const id = req.params.id;
    const changeObject = {};

    if (title) {
      changeObject.title = title;
    }
    if (body) {
      changeObject.body = body;
    }

    changeObject.isDraft = isDraft;
    console.log(changeObject);
    try {
      const post = await Post.findOneAndUpdate({ _id: id }, changeObject, {
        new: true,
      });
      console.log(post);
      res.json({ message: "Post has been updated!", post });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  deletePost: async (req, res) => {
    try {
      await Post.deleteOne({ _id: req.params.id });
      res.json({ message: "Post has been deleted!" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
