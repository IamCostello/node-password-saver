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
  try {
    const savedPasswords = await Passwords.findOne({});

    if (!savedPasswords) {
      throw new Error("No saved passwords");
    }

    const passwordHash = hashPassword(password, savedPasswords.salt);

    await savedPasswords.update({
      $push: { saved: { password: passwordHash } },
    });
    return passwordHash;
  } catch (error) {
    throw error;
  }
};

/**
 * Checks for duplicates in Passwords collection
 * @param {string} password - hashed password
 */
export const verifyPassword = async (password) => {
  try {
    const savedPasswords = await Passwords.findOne({});

    if (!savedPasswords) {
      throw new Error("No saved passwords");
    }

    const passwordHash = hashPassword(password, savedPasswords.salt);

    const savedPass = savedPasswords.saved.filter(
      (pass) => pass.password === passwordHash
    );

    return savedPass;
  } catch (error) {
    throw error;
  }
};
