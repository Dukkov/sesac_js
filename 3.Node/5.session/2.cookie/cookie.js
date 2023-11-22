import http from "http";

const server = http.createServer((req, resp) => {
    console.log(req.url, req.headers.cookie);
    resp.writeHead(200, { "set-cookie": "mycookie=test" });
    resp.end("Done");
});

server.listen(3000, () => {
    console.log(`Port ready`);
});