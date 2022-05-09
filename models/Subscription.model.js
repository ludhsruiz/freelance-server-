const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema(
  {
    publisher: {
        type: Schema.Types.ObjectId,
         ref: 'User'
    },
    totalPrice: {
        type: Number
    },
    year: {
        type: Number
    },
   },
   { timestamps: true }
);

const Subscription = model("Subscription", subscriptionSchema);

module.exports = Subscription;