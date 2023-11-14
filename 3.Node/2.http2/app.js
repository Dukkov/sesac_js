import http from "http";
import { promises as fsPromises} from "fs";

const success = 200;
const serverError = 500;
const notFound = 404;
const server = http.createServer(async (req, res) => {
    console.log(req.method, req.url);
    try {
        if (req.method === "GET") {
            if (req.url === "/") {
                const data = await fsPromises.readFile("./index.html");
                res.writeHead(success, { "Content-Type": "text/html; charset=utf8" });
                res.end(data);
            }
            else if (req.url === "/about") {
                const data = await fsPromises.readFile("./about.html");
                res.writeHead(success, { "Content-Type": "text/html; charset=utf8" });
                res.end(data);
            }
            else if (req.url === "/Black_cat.jpeg") {
                try {
                    const data = await fsPromises.readFile("./Black_cat.jpeg");
                    res.writeHead(success, { "Content-Type": "image/jpeg" });
                    res.end(data);
                } catch (err) {
                    console.log(err.message);
                }
            }
            else {
                res.writeHead(notFound);
                res.end("not found");
            }
        }
        else if (req.method === "POST") {
            res.writeHead(201);
            res.end("register done");
        }
        else if (req.method === "PUT") {
            res.end("modify done");
        }
        else if (req.method === "DELETE") {
            res.end("delete done");
        }
    } catch (err) {
        res.writeHead(serverError, { "Content-Type": "text/html; charset=utf8" });
        res.end("server error");
    }
});

const port = 8000;
server.listen(port, () => {
    console.log(`Port ${port} opened.`);
});