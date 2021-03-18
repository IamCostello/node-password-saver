import mongoose from "mongoose";

/**
 * Saved passwords collection
 */
const passwordsSchema = new mongoose.Schema({
  saved: [
    {
      password: { type: String, required: true },
      salt: { type: String, required: true },
    },
  ],
});

export default mongoose.model("Passwords", passwordsSchema);
