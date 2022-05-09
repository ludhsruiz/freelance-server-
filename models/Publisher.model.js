const { Schema, model } = require("mongoose");

const publisherSchema = new Schema(
  {
    name: {
        type: String,
        required: [true, 'El nombre de la compañia es obligatorio'],
        trim: true
      },
      email: {
        type: String,
        unique: true,
        required: [true, 'El email es obligatorio'],
        lowercase: true,
        trim: true
      },
      profileImg: { 
        type: String, 
        default: 'https://i.stack.imgur.com/l60Hf.png' 
        },
      description: {
        type: String,
        required: true, 
        trim: true
      },
     representative:  {
                   type: Schema.Types.ObjectId,
                   ref:"User",
               },
    },
    { timestamps: true }
);

const Publisher = model("Publisher", publisherSchema);

module.exports = Publisher;

