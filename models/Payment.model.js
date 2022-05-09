const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },        
    event: {
              type: Schema.Types.ObjectId,
              ref:"Event",
    },		
    paymentMethod: {
                type: String,
                required: true,
    },
    totalPrice: {
                type: Number,
                required: true,
                default: 0.0,
    },    
    isPaid: {
                type: Boolean,
                required: true,
                default: false,
        },
    },
    { timestamps: true }		   
);

const Payment = model("Payment", paymentSchema);

module.exports = Payment;