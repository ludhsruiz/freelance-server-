const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: String,
      requiered: true,
      maxLength: 140,
    }
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;