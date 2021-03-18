import Passwords from "../models/Passwords.js";
import { hashPassword } from "./cipher.js";

export const fetchPasswords = async () => {
  try {
    const savedPasswords = await Passwords.findOne();
    return savedPasswords.saved;
  } catch (error) {
    throw error;
  }
};

export const savePassword = async (passwordHash) => {
  const passwordHashData = hashPassword(passwordHash);
  await Passwords.findOneAndUpdate({}, { $push: { saved: passwordHashData } });
  return passwordHashData;
};

export const verifuPassword = async () => {
  return 0;
};
