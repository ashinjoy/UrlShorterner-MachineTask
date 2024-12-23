import { urlModel } from "../models/urlModel.js";

export const urlRepository = {
  createUrl: async (urlData) => {
    try {
        const createUrlData = await urlModel.create(urlData)
        return createUrlData
    } catch (error) {
        console.error(error)
        throw error
    }
  },
};
