import { verifyToken } from "../utils/jwt";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies["accessToken"];
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
