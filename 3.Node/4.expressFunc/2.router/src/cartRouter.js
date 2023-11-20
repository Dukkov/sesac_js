import express from "express";

export const cartRouter = express.Router();

cartRouter.route("/")
    .get((req, resp) => {
    resp.send("카트 페이지");
    })
    .post((req, resp) => {
        resp.send("카트 담기");
    })
    .put((req, resp) => {
        resp.send("카트 수정");        
    })
    .delete((req, resp) => {
        resp.send("카트 삭제");
    });