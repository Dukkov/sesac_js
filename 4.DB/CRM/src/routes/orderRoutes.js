import express from "express";
import { orderListRenderer, orderInfoRenderer } from "../controllers/orderController.js";

export const router = express.Router();

router.get("/:pageNum", orderListRenderer);
router.get("/order-info/:orderId", orderInfoRenderer);