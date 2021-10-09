const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
  allPosts: async (req, res) => {
    const posts = await Post.find().sort({ createdAt: "desc" }).lean();
    res.json({ posts });
  },
  published: async (req, res) => {
    const posts = await Post.find({ isDraft: false })
      .sort({ publishedAt: "desc" })
      .lean();
    res.json({ posts });
  },
  postById: async (req, res) => {
    const isAdmin = req.session.isAdmin;
    const { id } = req.params.id;
    const post = await Post.findById({ _id: id });
    if (post.isDraft && !isAdmin) {
      res.status(401).json({ message: "Permission denied" });
    } else {
      res.json({ post });
    }
  },
  getAdminStatus: async (req, res) => {
    try {
      const user = await User.findById({ _id: req.params.id });
      const isAdmin = user.isAdmin;
      res.json({ isAdmin });
    } catch (err) {
      console.log(err);
    }
  },
};
