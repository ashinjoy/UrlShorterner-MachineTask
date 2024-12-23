import { authRoutes } from "./authRoutes.js";
import { urlRoutes } from "./urlRoutes.js";

export const routes = (app, router) => {
  app.use("/api/v1/auth", authRoutes(router));
  app.use("/api/v1/url",urlRoutes(router))
};
