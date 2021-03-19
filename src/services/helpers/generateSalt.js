import { randomBytes } from "crypto";

/**
 * Returns random string
 */
const generateSalt = () => randomBytes(256).toString("hex");

export default generateSalt;
