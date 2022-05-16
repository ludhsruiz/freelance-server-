const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
    suscription: {
      type: Schema.Types.ObjectId,
      ref: "Suscription",
    },

    amount: {
      type: Number,
      required: true,
      default: 0.0,
    }

  },
  { timestamps: true }
);

const Payment = model("Payment", paymentSchema);

module.exports = Payment;