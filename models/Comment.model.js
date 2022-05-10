const { Schema, model } = require("mongoose")

const commentSchema = new Schema({
    message: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event",
    }, 
    date: Date

},{collection: 'Comments'});

const Comments = model("Comment", commentSchema)
module.exports = Comments