import http from "http";

const server = http.createServer((req, res) => {
    //header
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    //body
    res.write("<h1>My first WAS Server</h1>");
    res.end("<p>welcome!</p>");
});

server.listen(3000, () => {
    console.log("server ready.");
});