import { userRepository } from "../repository/userRepository.js";
import { authService } from "../services/authService.js";
import { createToken } from "../utils/jwt.js";

export const authController = {
  googleAuth: async (req, res) => {
    try {
      let userDetails;
      const { authToken } = req.body;
      if (!authToken) {
        const error = new Error("Bad Request");
        error.statusCode = 400;
        throw error;
      }
      const userData = await authService.getUserTokenAndData(authToken);
      userDetails = await userRepository.getUserByEmail(userData?.email);
      if (!userDetails) {
        const userEntity = {
          name: userData?.name,
          email: userData?.email,
          profile: userData?.profile,
        };
        userDetails = await userRepository.createUser(userEntity);
      }
      const getAccessToken = await createToken(userDetails?.id);
      res.cookie("accessToken", getAccessToken);

      res
        .status(201)
        .json({ success: true, message: "Authentication Success" });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
