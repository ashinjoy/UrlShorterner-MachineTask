import mongoose from "mongoose";
import constants from "../constants/secrets.js";
const { DB_CONNECTION_STRING } = constants;

export async function dbConnection() {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log('db connected ');
  } catch (error) {
    console.error(error);
    throw error;
  }
}
