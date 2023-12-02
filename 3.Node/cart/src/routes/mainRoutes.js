import express from "express";
import { mainPage, productPage, cartPage} from "../controllers/mainController.js";

export const router = express.Router();

router.get("/", mainPage);
router.get("/product", productPage);
router.get("/cart", cartPage);