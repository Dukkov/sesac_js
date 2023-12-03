import express from "express";
import { mainPage } from "../controllers/mainController.js";

export const router = express.Router();

router.get("/", mainPage);