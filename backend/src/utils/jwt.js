import jwt from "jsonwebtoken";
import { secrets} from "../constants/secrets.js";
export const createToken = async (id) => {
  try {
    const {JWT_SECRET} =  secrets
    const token = await jwt.sign(id, JWT_SECRET);
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

