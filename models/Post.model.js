const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    writer : {
        type: Schema.Types.ObjectId,
       ref:"user",
   },
   receiver: {
        type: Schema.Types.ObjectId,
       ref:"user",
   },
   comment: {
       type: string,
       requiered: true,
       maxLength: 140,
   }
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;