const { Schema, model } = require("mongoose");

const offerSchema = new Schema(
  {
    offerName: {   
        type: String,
        required: [true, 'El nombre de evento es obligatorio'],
    },
    company : {   
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
    writer: {
                type: Schema.Types.ObjectId,
                ref:"user",
    },
    },
    { timestamps: true }
);

const Offer = model("Offer", offerSchema);

module.exports = Offer;