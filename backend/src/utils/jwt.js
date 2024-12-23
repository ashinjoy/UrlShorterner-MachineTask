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
export const verifyToken = async (token) =>{
  try {
    const {JWT_SECRET} =  secrets

   const isVerified =  jwt.verify(token,JWT_SECRET)
   return isVerified
  } catch (error) {
    console.error(error);
    throw error
  }
}

