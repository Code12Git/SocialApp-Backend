import express from "express";
import {
  LoginController,
  RegisterController,
} from "../controllers/AuthController.js";

const router = express.Router();

// Register
router.post("/register", RegisterController);

// Login
router.post("/login", LoginController);

export default router;
