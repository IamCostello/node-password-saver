import crypto, { randomBytes } from "crypto";

export const hashPassword = (password) => {
  try {
    const salt = randomBytes(256).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha256");
    return { password: hash.toString("hex"), salt };
  } catch (error) {
    throw error;
  }
};
