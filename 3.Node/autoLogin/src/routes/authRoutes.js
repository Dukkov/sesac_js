import express from "express";
import { userInfo, userLogin, userLogout } from "../controllers/authController.js";

export const router = express.Router();

router.get("/", userInfo);
router.get("/logout", userLogout);
router.post("/login", userLogin);