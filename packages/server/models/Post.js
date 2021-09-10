const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    isDraft: {
      type: Boolean,
      required: true,
    },
    publishedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

PostSchema.pre("save", function save() {
  const changes = this.getChanges();

  if (changes.isDraft === false) {
    this.publishedAt = new Date();
  }
});

module.exports = mongoose.model("Post", PostSchema);
