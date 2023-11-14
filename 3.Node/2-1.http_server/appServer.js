import http from "http";
import { promises as fsPromises } from "fs";

const OK = 200;
const NOT_FOUND = 404;
const INTERNAL_ERROR = 500;
const PORT = 8000;

const server = http.createServer(async (req, res) => {
    console.log(req.method, req.url);
    try {
        if (req.method === "GET") {
            if (req.url === "/") {
                const data = await fsPromises.readFile("./mainPage.html");
                res.writeHead(OK, { "Content-Type": "text/html; charset=utf8" });
                res.end(data);
            }
            else if (req.url === "/favorite") {
                const data = await fsPromises.readFile("./favorite.html");
                res.writeHead(OK, { "Content-Type": "text/html; charset=utf8" });
                res.end(data);
            }
            else if (req.url.startsWith("/image/")) {
                const dotIndex = req.url.lastIndexOf(".");
                const fileName = req.url.substring(7);
                const extenderName = req.url.substring(dotIndex + 1);
                const data = await fsPromises.readFile(`./image/${fileName}`);
                res.writeHead(OK, { "Content-Type": `image/${extenderName}` });
                res.end(data);
            }
            else if (req.url.startsWith("/static/")) {
                const dotIndex = req.url.lastIndexOf(".");
                const fileName = req.url.substring(8);
                let extenderName = req.url.substring(dotIndex + 1);
                let fileType;
                if (extenderName === "css" || extenderName === "js") {
                    fileType = "text";
                    if (extenderName === "js")
                        extenderName = "javascript";
                }
                else
                    fileType = "image";
                const data = await fsPromises.readFile(`./static/${fileName}`);
                res.writeHead(OK, { "Content-Type": `${fileType}/${extenderName}` });
                res.end(data);
            }
            else {
                res.writeHead(NOT_FOUND, { "Content-Type": "text/plain" });
                res.end("NOT FOUND");
            }
        }
        else if (req.method === "POST") {
            res.end("Post done");
        }
    } catch (err) {
        res.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
        res.end("Internal server error");
    }
})

server.listen(PORT, () => {
    console.log(`Port ${PORT} has opened.`);
})