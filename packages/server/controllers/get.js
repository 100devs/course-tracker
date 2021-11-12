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
