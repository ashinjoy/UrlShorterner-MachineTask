import { authController } from "../controllers/authenticationController.js";

export const authRoutes = (router) => {
  router.route("/google").post(authController.googleAuth);
  return router;
};
