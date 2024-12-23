import { urlRepository } from "../repository/urlRepository.js";
import { urlService } from "../services/urlService.js";

export const urlController = {
  createUrl: async (req, res, next) => {
    try {
      const { longUrl, customAlias, topic } = req.body;
      if (!longUrl) {
        const error = new Error("Provide Url to Shorten");
        error.status = 400;
        throw error;
      }
      const { shortUrl, randomId } = await urlService.createShortUrl(
        longUrl,
        customAlias
      );

      const urlEntity = {
        userId: req.userId,
        longUrl,
        shortUrl: shortUrl,
        alias: customAlias || randomId,
        topic: topic,
      };
      const insertUrlData = await urlRepository.createUrl(urlEntity);
      res.status(201).json({ success: true, message: "Short Url Created" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
