import express from "express";
import { userInfo, logout, login } from "../controllers/authController.js";

export const router = express.Router();

router.get("/", userInfo);
router.get("/logout", logout);
router.post("/login", login);