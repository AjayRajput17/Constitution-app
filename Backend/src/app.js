import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import chatroutes from "./routes/chatRoutes.js";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Vite default port
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/chatbot",chatroutes);

export default app;
