import axios from "axios";

export const authService = {
  getUserTokenAndData: async (authToken) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${authToken}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
   
};

