import express from "express";

export const userRouter = express.Router();

userRouter.get("/profile", (req, resp) => {
    resp.send("사용자 프로필");
});

userRouter.get("/settings", (req, resp) => {
    resp.send("사용자 설정");
});