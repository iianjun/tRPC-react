import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    fileId: { type: Schema.Types.ObjectId },
    name: { type: String },
    content: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export default model("Files", noteSchema, "Files");
