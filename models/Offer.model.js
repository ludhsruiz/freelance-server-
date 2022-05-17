const { Schema, model } = require("mongoose");

const offerSchema = new Schema(
  {
    title: {   
        type: String,
        required: [true, 'El nombre de evento es obligatorio'],
    },
    companyName : {   
        type: String,
        required: true,
    },
    companyLogo : {   
        type: String,
        default: 'https://i.stack.imgur.com/l60Hf.png' 
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
    },
    publisher: {
                type: Schema.Types.ObjectId,
                ref:"User",
    },
    subscribers: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        }
      ]  
    },
    { timestamps: true }
);

const Offer = model("Offer", offerSchema);

module.exports = Offer;