import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/farms_db";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in your .env.local file"
  );
}

// Gestion de l'état de connexion
let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    console.log("Using existing database connection");
    return mongoose.connection;
  }

  console.log("Creating new database connection");

  try {
    const connection = await mongoose.connect(MONGODB_URI); // Les options sont implicites dans les versions récentes
    isConnected = true;
    console.log("Database connected");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
