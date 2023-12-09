import express from "express";
import { storeListRenderer, storeInfoRenderer } from "../controllers/storeController.js";

export const router = express.Router();

router.get("/:pageNum", storeListRenderer);
router.get("/store-info/:storeId", storeInfoRenderer);