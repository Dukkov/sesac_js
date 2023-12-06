import express from "express";
import { itemList } from "../controllers/itemController.js";

export const router = express.Router();

router.get("/", itemList);