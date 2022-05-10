const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema(
  {
    publisher: {
        type: Schema.Types.ObjectId,
         ref: 'User'
    },
    totalPrice: {
        type: Number,
        default: 120
    },
   },
   { timestamps: true }
);

const Subscription = model("Subscription", subscriptionSchema);

module.exports = Subscription;