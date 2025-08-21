import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import chatroutes from "./routes/chatRoutes.js";
import libraryRoutes from "./routes/libraryRoutes.js";

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Use environment variable or fallback
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/chatbot",chatroutes);
app.use("/api/library", libraryRoutes);

export default app;
