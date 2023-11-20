import express from "express";
import path from "path";
import bodyParser from "body-parser";

const __dirname = path.resolve;
const app = express();
const port = 3000;

const users = {};

app.use("/static", express.static("public/static"));
app.use("/image", express.static("public/static"));

app.use();

app.get("/", (req, resp) => {
    resp.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/about", (req, resp) => {
    resp.sendFile(path.resolve(__dirname, "public", "about.html"));
});

app.get("/user", (req, resp) => {
    resp.join(users);
});

app.post("/user", (req, resp) => {
    const id = Date.now();
    const { name } = req.body;

    users[id] = name;
    resp.status(201).send("Post done");
});

app.put()

app.delete("/user/:id", (req, resp) => {
    const id = req.params.id;
    delete users[id];
    resp.status(200).send("Delete done");
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});