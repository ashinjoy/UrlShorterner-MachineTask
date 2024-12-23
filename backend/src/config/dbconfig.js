import mongoose from "mongoose";
import  { secrets } from "../constants/secrets.js";
const { DB_CONNECTION_STRING } = secrets;

export async function dbConnection() {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log('db connected ');
  } catch (error) {
    console.error(error);
    throw error;
  }
}
