import { urlService } from "../services/urlService.js";

export const urlController = {
  createUrl: async (req, res, next) => {
    try {
      const { longUrl, customAlias, topic } = req.body;
      if(!longUrl){
        const error = new Error('Provide Url to Shorten')
        error.status = 400
        throw error
      }
      const generateShortUrl = await urlService.createShortUrl(longUrl,customAlias)
      const urlEntity = {
        
      }
      
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
