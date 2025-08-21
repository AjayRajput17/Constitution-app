import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const connectDB = async () => {
  // Debug: Show what environment variables are available
  console.log("🔍 Environment variables check:");
  console.log("MONGO_URI:", process.env.MONGO_URI ? "✅ Set" : "❌ Not set");
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("PORT:", process.env.PORT);
  
  // Check if MONGO_URI is defined
  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI environment variable is not defined!");
    console.error("Please check your .env file in the Backend directory");
    console.error("Make sure it contains: MONGO_URI=your_connection_string");
    console.error("No spaces around the = sign!");
    process.exit(1);
  }

  try {
    console.log("🔄 Attempting to connect to MongoDB...");
    console.log("📡 Connection string:", process.env.MONGO_URI.replace(/\/\/[^:]+:[^@]+@/, "//***:***@"));
    
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
    console.error("");
    console.error("🔧 Troubleshooting steps:");
    console.error("1. Make sure MongoDB is installed and running");
    console.error("2. Check if MongoDB service is started");
    console.error("3. Verify the connection string in your .env file");
    console.error("4. If using MongoDB Atlas, check your IP whitelist");
    console.error("5. Try running: mongod --version (to check if MongoDB is installed)");
    console.error("");
    console.error("💡 For development, you can:");
    console.error("- Install MongoDB Community Edition");
    console.error("- Use MongoDB Atlas (cloud) with a free tier");
    console.error("- Use Docker: docker run -d -p 27017:27017 --name mongodb mongo:latest");
    console.error("");
    process.exit(1);
  }
};

export default connectDB;
