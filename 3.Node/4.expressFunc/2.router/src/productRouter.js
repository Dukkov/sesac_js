import express from "express";

export const productRouter = express.Router();

productRouter.get("/", (req, resp) => {
    resp.send("상품 페이지");
});

productRouter.get("/details", (req, resp) => {
    resp.send("상품 세부정보");
});

productRouter.get("/list", (req, resp) => {
    resp.send("상품 리스트");
});