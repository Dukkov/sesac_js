import express from "express";
import nunjucks from "nunjucks";
import fs from "fs";

const app = express();
const port = 3000;

nunjucks.configure("views", { express: app });
app.set("view engine", "html");

app.get("/", (req, resp) => {
    const data = [];
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});