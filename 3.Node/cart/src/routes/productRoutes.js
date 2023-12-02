import express from "express";
import { productsInfo } from "../controllers/productController.js";

export const router = express.Router();

router.get("/", productsInfo);