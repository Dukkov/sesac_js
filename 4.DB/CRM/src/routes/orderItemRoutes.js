import express from "express";
import { orderItemList } from "../controllers/orderItemController.js";

export const router = express.Router();

router.get("/", orderItemList);