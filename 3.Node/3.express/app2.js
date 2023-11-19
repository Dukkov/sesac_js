import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, resp) => {
    resp.send("Hello, World!\nGet done");
});

app.post("/", (req, resp) => {
    resp.send("Hello, World!\nPost done");
});

app.put("/", (req,resp) => {
    resp.send("Hello, World!\nPut done");
});

app.delete("/", (req,resp) => {
    resp.send("Hello, World!\nDelete done");
});

app.listen(port, () => {
    console.log(`Port ${port} opened.`);
});