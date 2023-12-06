import express from "express";
import { userList } from "../controllers/userController.js";

export const router = express.Router();

router.get("/", userList);