import express from "express";
import { itemListRenderer, itemInfoRenderer } from "../controllers/itemController.js";

export const router = express.Router();

router.get("/:pageNum", itemListRenderer);
router.get("/item-info/:itemId", itemInfoRenderer);