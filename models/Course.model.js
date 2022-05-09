const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    name: {   
        type: String,
        required: [true, 'El nombre del curso es obligatorio'],
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
    price: {
            type: String
    },       
    attendants:  [
               {
                   type: Schema.Types.ObjectId,
                   ref:"user",
               },
           ], 
    comments:  {
                   type: Schema.Types.ObjectId,
                   ref:"comment",
            },
    },
    { timestamps: true }
);

const Course = model("Course", courseSchema);

module.exports = Course;