import express from "express";
import { orderList } from "../controllers/orderController.js";

export const router = express.Router();

router.get("/", orderList);