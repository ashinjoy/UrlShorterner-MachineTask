import { secrets } from "../constants/secrets.js";
import { generateRandomId } from "../utils/randomId.js";

export const urlService = {
  createShortUrl: async (longUrl, customAlias) => {
    const { HOSTNAME } = secrets;
    try {
      let shortUrl;
      if (longUrl && customAlias) {
        shortUrl = `http//:${HOSTNAME}/${customAlias}`;
      } else {
        const randomId = generateRandomId();
        shortUrl = `http//:${HOSTNAME}/${randomId}`;
      }
      return shortUrl;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
