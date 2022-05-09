const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    name: {   
        type: String,
        required: [true, 'El nombre de evento es obligatorio'],
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
    },
    date: {
        type: Date,
        required: [true, 'La fecha es obligatoria']
    },
    img: { 
        type: String, 
        default: 'https://i.stack.imgur.com/l60Hf.png' 
    },
    location: {
            type: String
    },
    attendants:  [
               {
                   type: Schema.Types.ObjectId,
                   ref:"user",
               },
           ], 
    representative:  {
                   type: Schema.Types.ObjectId,
                   ref:"user",
                },
    },
    { timestamps: true }
);

const Event = model("Event", eventSchema);

module.exports = Event;