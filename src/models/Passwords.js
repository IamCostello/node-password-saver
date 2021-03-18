import { model, Schema } from "mongoose";

const passwordsSchema = new Schema({
  saved: [
    {
      password: { type: String, required: true },
      salt: { type: String, required: true },
    },
  ],
});

export default model("Passwords", passwordsSchema);
