import { secrets } from "../constants/secrets.js";
import { generateRandomId } from "../utils/randomId.js";

export const urlService = {
  createShortUrl: async (longUrl, customAlias) => {
    const { HOSTNAME } = secrets;
    try {
      let shortUrl , randomId;
      if (longUrl && customAlias) {
        shortUrl = `http//:${HOSTNAME}/${customAlias}`;
      } else {
         randomId = generateRandomId();
        shortUrl = `http//:${HOSTNAME}/${randomId}`;
      }
      return {shortUrl,randomId};
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
