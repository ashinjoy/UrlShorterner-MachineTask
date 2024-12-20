import { configDotenv } from "dotenv";
configDotenv();
const { PORT,DB_CONNECTION_STRING } = process.env;

export default  {
  PORT,
  DB_CONNECTION_STRING
};
