import http from "http";
import { promises as fsPromises } from "fs";

http.createServer(async (req, res) => {
    try {
    const data = await fsPromises.readFile("./login1.html");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
    } catch (err) {
        console.error("error");
        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
        res.end("500 Server internal error");
    }
})
    .listen(8000, () => {
        console.log("Port 8000 opened.");
    })