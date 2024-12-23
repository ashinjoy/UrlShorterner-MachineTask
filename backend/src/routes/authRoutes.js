import { authController } from "../controllers/authenticationController.js";

export const authRoutes = (router) => {
  router.route("/google").get(authController.googleAuthConsent)
  router.route("/google/callback").get(authController.googleAuth)
  // router.route("/google").post(authController.googleAuth);
  return router;
};
