import mongoose from "mongoose";

/**
 * Saved passwords collection
 */
const passwordsSchema = new mongoose.Schema({
  salt: { type: String, required: true },
  saved: [
    {
      password: { type: String, required: true },
    },
  ],
});

export default mongoose.model("Passwords", passwordsSchema);
