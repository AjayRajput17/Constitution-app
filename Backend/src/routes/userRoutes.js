import express from "express";
import { 
  getUsers, 
  createUser, 
  loginUser, 
  getCurrentUser, 
  updateUser 
} from "../controllers/userController.js";
import { authenticateToken } from "../middleware/index.js";

const router = express.Router();

// Public routes
router.post("/register", createUser);
router.post("/login", loginUser);

// Protected routes (require authentication)
router.get("/profile", authenticateToken, getCurrentUser);
router.put("/profile", authenticateToken, updateUser);

// Admin routes (optional - you can add admin middleware later)
router.get("/", authenticateToken, getUsers);

export default router;
