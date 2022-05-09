const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio'],
      trim: true
    },
    surname: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio'],
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'El email es obligatorio'],
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria']
    },
    profileImg: { 
      type: String, 
      default: 'https://i.stack.imgur.com/l60Hf.png' 
      },
  
    description: {
      type: String,
      required: true, 
    },
    ocupacion: {
        type : string,
        enum: [Digital, Education, Marketing, Events, Diseño, Foto, otros ]
      },
  
    role: {
      type: String, 
      enum: ['USER', 'ADMIN', 'PUBLISHER'], 
      default: 'USER'
    },
      
    match :  [
             {
                 type: Schema.Types.ObjectId,
                 ref:"user",
             },
         ], 
  
    publisher :  [
             {
                 type: Schema.Types.ObjectId,
                 ref:"publisher",
             },
         ],  
  
    eventAssitance :  [
             {
                 type: Schema.Types.ObjectId,
                 ref:"event",
             },
         ],   
  
     coursesAssitance :  [
             {
                 type: Schema.Types.ObjectId,
                 ref:"course",
             },
         ],              
  }
  
);

const User = model("User", userSchema);

module.exports = User;
