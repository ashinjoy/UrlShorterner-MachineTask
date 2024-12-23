import { userModel } from "../models/userModel.js";

export const userRepository = {
  createUser: async (userData) => {
    try {
      const createdUser = await userModel.create(userData);
      return createdUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getUserByEmail: async (email) => {
    try {
      const userData = await userModel.findOne({ email: email });
      return userData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
