import express from "express";
import { itemListRenderer } from "../controllers/itemController.js";

export const router = express.Router();

router.get("/:pageNum", itemListRenderer);