import express from "express";
import { storeList } from "../controllers/storeController.js";

export const router = express.Router();

router.get("/", storeList);