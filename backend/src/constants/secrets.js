import { configDotenv } from "dotenv";
configDotenv();
const { PORT,DB_CONNECTION_STRING,JWT_SECRET,HOSTNAME } = process.env;

export const secrets =  {
  PORT,
  DB_CONNECTION_STRING,
  JWT_SECRET,
  HOSTNAME
};
