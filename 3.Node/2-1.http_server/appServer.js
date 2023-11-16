import http from "http";
import querystring from "querystring";
import { promises as fsPromises } from "fs";

const OK = 200;
const NOT_FOUND = 404;
const INTERNAL_ERROR = 500;
const PORT = 8000;

const users = {};

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
            else if (req.url === "/user") {
                res.writeHead(OK, { "Content-Type": "text/plain; charset=utf8" });
                res.end(JSON.stringify(users));
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
                try {
                    const dotIndex = req.url.lastIndexOf(".");
                    const fileName = req.url.substring(8);
                    const extenderName = req.url.substring(dotIndex + 1);
                    const contentType = getContentType(extenderName);
                    const data = await fsPromises.readFile(`./static/${fileName}`);
                    res.writeHead(OK, { "Content-Type": `${contentType}`});
                    res.end(data);
                } catch (err) {
                    res.writeHead(NOT_FOUND, { "Content-Type": "text/plain" });
                    res.end("NOT FOUND");
                }
            }
            else {
                res.writeHead(NOT_FOUND, { "Content-Type": "text/plain" });
                res.end("NOT FOUND");
            }
        }
        else if (req.method === "POST") {
            if (req.url === "/user") {
                let body = "";
                req.on("data", (data) => { body += data });
                req.on("end", async () => {
                    const formData = JSON.parse(body);
                    console.log(formData);
                    const username = formData.name;
                    users[Date.now()] = username;
                });
            }
            res.writeHead(OK, { "Content-Type": "text/plain" });
            res.end("Post done");
        }
        else if (req.method === "DELETE") {
            try {
                if (req.url.startsWith("/user/")) {
                    const targetKey = req.url.substring(6);
                    delete users[targetKey];
                }
                res.writeHead(OK, { "Content-Type": "text/plain" });
                res.end("Delete done");
            } catch (err) {
                res.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                res.end("Internal server error");
            }
        }
        else if (req.method === "PUT") {
            try {
                if (req.url.startsWith("/user/")) {
                    const targetKey = req.url.split("/")[2];
                    delete users[targetKey];
                    let body = "";
                    req.on("data", (data) => {
                        body += data;
                    });
                    req.on("end", () => {
                        const reqData = JSON.parse(body);
                        console.log(reqData);
                        users[reqData.name] = reqData.name;
                        res.writeHead(OK, { "Content-Type": "text/plain" });
                        res.end("Modify done");
                    });
                }
            } catch (err) {
                res.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                res.end("Internal server error");
            }
        }
    } catch (err) {
        res.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
        res.end("Internal server error");
    }
})

server.listen(PORT, () => {
    console.log(`Port ${PORT} has opened.`);
})

function getContentType(extender) {
    if (extender === "css" || extender === "js" || extender === "html") {
        if (extender === "js")
            return ("text/javascript; charset=utf8");
        else
            return (`text/${extender}; charset=utf8`);
    }
    else
        return (`image/${extender}`);
}