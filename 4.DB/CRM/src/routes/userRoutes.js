import express from "express";
import { userListRenderer, userInfoRenderer } from "../controllers/userController.js";

export const router = express.Router();

router.get("/:pageNum", userListRenderer);
router.get("/user-info/:userId", userInfoRenderer);