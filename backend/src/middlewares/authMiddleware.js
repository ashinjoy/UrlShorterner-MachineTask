import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const token = req.cookies["accessToken"];
    console.log(token);
    
    const isTokenValid = verifyToken(token);
    if (!isTokenValid) {
      const error = new Error("Not Authenticated");
      error.status = 401;
      throw error;
    }
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};
