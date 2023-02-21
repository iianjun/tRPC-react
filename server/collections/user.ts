import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
    background: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);
export default model("Users", userSchema, "Users");
