import express from "express";
import { cartInfo, cartTotal, addCart, adjustCart, dropCart } from "../controllers/cartController.js";
import { checkUser } from "../middlewares/authMiddleware.js";

export const router = express.Router();

router.get("/", checkUser, cartInfo);
router.get("/total", cartTotal);
router.post("/add/:productId", addCart);
router.put("/adjust/:productId", adjustCart);
router.delete("/drop/:productId", dropCart);