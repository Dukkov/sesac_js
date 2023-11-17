import express from "express";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, resp) => {
    resp.send(`
    <html>
        <head>
            <title>이미지 로딩</title>
        </head>
        <body>
            <h1>이미지</h1>
            <img src = "/image/tux_cat.jpg">
        </body>
    </html>
    `);
});

app.get("/about", (req, res) => {
    const htmlFilePath = path.join("./", "public", "index.html");

    fs.readFile(htmlFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("error", err);
            res.status(500).send("failure");
            return;
        }
        
        res.send(data);
    });
});

app.get("/about2", (req, res) => {
    const htmlFilePath = path.join(__dirname, "public", "index.html");

    res.sendFile(htmlFilePath, (err) => {
        if (err) {
            console.error("failure", err);
            res.status(500).send("failure");
        }
    });
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});