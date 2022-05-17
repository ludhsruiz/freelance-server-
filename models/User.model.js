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
    },
    profileImg: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    description: {
      type: String,
      default: 'Añade una descripción corta'
    },
    bio: {
      type: String,
      default: 'Añade aquí tu bio'
    },
    occupation: {
      type: String,
      enum: ['Digital', 'Education', 'Marketing', 'Events', 'Diseño', 'Foto', 'Otros'],
      default: 'Otros'
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN', 'PUBLISHER'],
      default: 'USER'
    },
    follower: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    publishers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Publisher",
      },
    ],
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
