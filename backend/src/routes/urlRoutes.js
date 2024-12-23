import { urlController } from "../controllers/urlController.js"
import { isAuthenticated } from "../middlewares/authMiddleware.js"

export const urlRoutes = (router)=>{
router.use(isAuthenticated)
router.route('/shorten').post(urlController.createUrl)
return router
}