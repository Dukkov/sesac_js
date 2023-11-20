import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();
const port = 3000;
const users = {};

app.use("/static", express.static("public/static"));
app.use("/image", express.static("public/static"));
app.use(express.json());

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/user", (req, resp) => {
    resp.json(users);
});

app.post("/user", (req, resp) => {
    console.log(req.body);
    const jsonData = req.body;
    console.log(jsonData);
    const id = Date.now();

    users[id] = jsonData.newName;
    resp.status(200).send("Post done");
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});