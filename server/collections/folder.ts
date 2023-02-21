import { Schema, model } from "mongoose";

const folderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, require: true },
    name: { type: String, require: true },
    clientX: { type: Number },
    clientY: { type: Number },
  },
  { versionKey: false, timestamps: true }
);

export default model("Folders", folderSchema, "Folders");
