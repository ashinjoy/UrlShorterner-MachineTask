import axios from "axios";
import { GOOGLE_REDIRECT_URI } from "../constants/constants.js";
import { secrets } from "../constants/secrets.js";
import { userRepository } from "../repository/userRepository.js";
import { authService } from "../services/authService.js";
import { createToken } from "../utils/jwt.js";

export const authController = {
  googleAuthConsent: (req, res, next) => {
    try {
      const { OAUTH_CLIENT_ID } = secrets;
      const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${OAUTH_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=profile email`;
      res.status(200).json({success:true,consentScreenUrl:url});
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  googleAuth: async (req, res, next) => {
    try {
      const {OAUTH_CLIENT_ID,OAUTH_SECRET} = secrets
      const { code } = req.query;      
      console.log(code);
      
      const { data } = await axios.post('https://oauth2.googleapis.com/token', {
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_SECRET,
        code,
        redirect_uri: GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code',
      });
      const {access_token,id_token} = data
      let userDetails;
      if (!access_token) {
        const error = new Error("Bad Request");
        error.statusCode = 400;
        throw error;
      }
      const userData = await authService.getUserTokenAndData(access_token);
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
      next(error);
    }
  },
};
