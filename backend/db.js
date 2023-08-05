import {} from "dotenv/config";
import mongoose from "mongoose";

const connection = async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://noob:noob_123@merntutorial.fvadfw2.mongodb.net/?retryWrites=true&w=majority"
    );
    return console.log("Connected to the database!");
  } catch (err) {
    return console.error("Error connecting to the database: ", err);
  }
}

export default connection;






