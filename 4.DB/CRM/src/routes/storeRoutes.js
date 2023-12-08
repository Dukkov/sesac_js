import express from "express";
import { storeListRenderer } from "../controllers/storeController.js";

export const router = express.Router();

router.get("/:pageNum", storeListRenderer);