import { urlController } from "../controllers/urlController.js"

export const urlRoutes = (router)=>{
router.route('/shorten').post(urlController.createUrl)
return router
}