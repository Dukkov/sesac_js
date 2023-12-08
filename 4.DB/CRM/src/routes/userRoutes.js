import express from "express";
import { userListRenderer } from "../controllers/userController.js";

export const router = express.Router();

router.get("/:pageNum", userListRenderer);