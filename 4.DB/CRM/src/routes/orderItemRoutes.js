import express from "express";
import { orderItemListRenderer, orderItemInfoRenderer } from "../controllers/orderItemController.js";

export const router = express.Router();

router.get("/:pageNum", orderItemListRenderer);
router.get("/order-item-info/:orderItemId", orderItemInfoRenderer);