import express from "express";
import { orderItemListRenderer } from "../controllers/orderItemController.js";

export const router = express.Router();

router.get("/:pageNum", orderItemListRenderer);