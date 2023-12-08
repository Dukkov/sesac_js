import express from "express";
import { orderListRenderer } from "../controllers/orderController.js";

export const router = express.Router();

router.get("/:pageNum", orderListRenderer);