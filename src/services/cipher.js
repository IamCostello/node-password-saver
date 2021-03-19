import crypto, { randomBytes } from "crypto";
import generateSalt from "./helpers/generateSalt.js";

/**
 * Returns hashed password and generated salt
 * @param {string} password - Password to hash.
 * @param {string} salt - Hashing salt
 */
export const hashPassword = (password, salt) => {
  try {
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha256");
    return hash.toString("hex");
  } catch (error) {
    throw error;
  }
};
