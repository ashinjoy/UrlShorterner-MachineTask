import express, { Router } from "express";
import {secrets} from "./constants/secrets.js";
import { dbConnection } from "./config/dbconfig.js";
import { routes } from "./routes/routes.js";
import cors from "cors";
import cookieParser from 'cookie-parser'

const { PORT } = secrets;

const app = express();
const router = Router();
dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
routes(app, router);
app.listen(PORT, () => console.log("server running"));
