import http from "http";
import { promises as fsPromises } from "fs";

const OK = 200;
const INTERNAL_ERROR = 500;
const NOT_FOUND = 400;
const PORT = 8080;

const mainServer = http.createServer(async (req, resp) => {
    console.log(req.method, req.url);
    try {
        if (req.method === "GET") {
            try {
                
            } catch (err) {
                console.error(err.message);
                resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                resp.end("Error: Internal server failure");
            }
        }
        else if (req.method === "POST") {
            try {

            } catch (err) {
                console.error(err.message);
                resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                resp.end("Error: Internal server failure");
            }
        }
        else if (req.method === "PUT") {
            try {

            } catch (err) {
                console.error(err.message);
                resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                resp.end("Error: Internal server failure");
            }
        }
        else if (req.method === "DELETE") {
            try {

            } catch (err) {
                console.error(err.message);
                resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
                resp.end("Error: Internal server failure");
            }
        }
        else {
            resp.writeHead(NOT_FOUND, { "Content-Type": "text/plain" });
            resp.end("Error: Not found");
        }
    } catch (err) {
        console.error(err.message);
        resp.writeHead(INTERNAL_ERROR, { "Content-Type": "text/plain" });
        resp.end("Error: Internal server failure");
    }
});

mainServer.listen(PORT, () => {
    console.log(`Port ${PORT} has opened`);
});