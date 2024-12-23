import mongoose, { model } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    profile: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = model("user", userSchema);
