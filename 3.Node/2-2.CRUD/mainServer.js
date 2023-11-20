import http from "http";
import { promises as fsPromises } from "fs";
import path from "path";

const OK = 200;
const INTERNAL_ERROR = 500;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const PORT = 8080;

const users = {};

const mainServer = http.createServer(async (req, resp) => {
    console.log(req.method, req.url);
    try {
        if (req.method === "GET") {
            try {
                if (req.url === "/") {
                    const data = await fsPromises.readFile(path.join("./static", "index.html"));
                    resp.writeHead(OK, {"Content-Type": "text/html; charset=utf8" });
                    resp.end(data);
                }
                else if (req.url === "/about") {
                    const data = await fsPromises.readFile(path.join("./static", "about.html"));
                    resp.writeHead(OK, { "Content-Type": "text/html; charset=utf8" });
                    resp.end(data);
                }
                else if (req.url === "/user") {
                    resp.writeHead(OK, { "Content-Type": "text/plain; charset=utf8" });
                    console.log(users);
                    resp.end(JSON.stringify(users));
                }
                else if (req.url.startsWith("/image") || req.url.startsWith("/static")) {
                    try {
                        const data = await fsPromises.readFile(path.join(`${req.url.split("/")[1]}`,`${req.url.split("/")[2]}`));
                        resp.writeHead(OK, { "Content-Type": `${getContentType(req.url)}`});
                        resp.end(data);
                    } catch (err) {
                        console.log(err.message);
                        resp.writeHead(BAD_REQUEST, { "Content-Type": "text/plain" });
                        resp.end("Error: 400 Bad request");
                    }
                }
                else {
                    resp.writeHead(NOT_FOUND, { "Content-Type": "text/plain" });
                    resp.end("Error: 404 Not found");
                }
            } catch (err) {
                console.error(err.message);
                resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                resp.end("Error: 500 Internal server failure");
            }
        }
        else if (req.method === "POST") {
            try {
                if (req.url === "/user") {
                    let body = "";
                    req.on("data", (data) => { body += data });
                    req.on("end", async () => {
                        console.log(body);
                        const userJson = JSON.parse(body);
                        console.log("HI " + userJson);
                        users[Date.now()] = userJson.newName;
                        resp.writeHead(OK, { "Content-Type": "text/plain" });
                        resp.end("Post done");
                    });
                }
                else {
                    resp.writeHead(BAD_REQUEST, { "Content-Type": "text/plain" });
                    resp.end("Error: 400 Bad request");
                }
            } catch (err) {
                console.error(err.message);
                resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                resp.end("Error: 500 Internal server failure");
            }
        }
        else if (req.method === "PUT") {
            try {
                if (req.url.startsWith("/user")) {
                    const targetKey = req.url.split("/")[2];
                    delete users[targetKey];

                    let body = "";
                    req.on("data", (data) => body += data);
                    req.on("end", () => {
                        const userJson = JSON.parse(body);
                        users[Date.now()] = userJson.name;
                        resp.writeHead(OK, { "Content-Type": "text/plain" });
                        resp.end("Modify done");
                    });
                }
                else {
                    resp.writeHead(BAD_REQUEST, { "Content-Type": "text/plain" });
                    resp.end("Error: 400 Bad request");
                }
            } catch (err) {
                console.error(err.message);
                resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                resp.end("Error: 500 Internal server failure");
            }
        }
        else if (req.method === "DELETE") {
            try {
                if (req.url.startsWith("/user")) {
                    const targetKey = req.url.split("/")[2];
                    delete users[targetKey];

                    resp.writeHead(OK, { "Content-Type": "text/plain" });
                    resp.end("Modify done");
                }
                else {
                    resp.writeHead(BAD_REQUEST, { "Content-Type": "text/plain" });
                    resp.end("Error: 400 Bad request");
                }
            } catch (err) {
                console.error(err.message);
                resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                resp.end("Error: 500 Internal server failure");
            }
        }
        else {
            resp.writeHead(BAD_REQUEST, { "Content-Type": "text/plain" });
            resp.end("Error: 400 Bad request");
        }
    } catch (err) {
        console.error(err.message);
        resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
        resp.end("Error: 500 Internal server failure");
    }
});

mainServer.listen(PORT, () => {
    console.log(`Port ${PORT} has opened`);
});

function getContentType(path) {
    const fileBase = path.split("/")[2];
    const fileExtender = fileBase.split(".")[1];
    if (fileExtender === "jpg" || fileExtender === "jpeg" || fileExtender === "png" || fileExtender === "gif")
        return (`image/${fileExtender}`);
    else if (fileExtender === "html" || fileExtender === "css" || fileExtender === "js") {
        if (fileExtender === "js")
            return ("text/javascript");
        else
            return (`text/${fileExtender}`);
    }
}