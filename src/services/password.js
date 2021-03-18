import Passwords from "../models/Passwords.js";
import { hashPassword } from "./cipher.js";

/**
 * Returns all saved passwords data
 */
export const fetchPasswords = async () => {
  try {
    const savedPasswords = await Passwords.findOne();

    if (!savedPasswords) {
      throw new Error("Passwords collection not found");
    }

    return savedPasswords.saved;
  } catch (error) {
    throw error;
  }
};

/**
 * Saves hashed password data to Passwords collection
 * @param {string} password - Password to hash.
 */
export const savePassword = async (password) => {
  const passwordHashData = hashPassword(password);

  await Passwords.findOneAndUpdate({}, { $push: { saved: passwordHashData } });
  return passwordHashData;
};

export const verifuPassword = async () => {
  return 0;
};
