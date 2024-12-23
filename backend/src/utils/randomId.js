import crypto from "crypto";

export const generateRandomId = () => {
  return crypto
    .randomBytes(Math.ceil(6 / 2))
    .toString("hex")
    .slice(0, 6);
};
