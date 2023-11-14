import http from "http";

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.write("<h1>Hello World!</h1>");
    res.write("<h2>Hello World!</h2>");
    res.write("<h3>Hello World!</h3>");
    res.write("<h4>Hello World!</h4>");
    res.end("<p>Hello Server1 열렸음.</p>");
}).listen(8000, () => {
    console.log("Port 8000 opened.");
})

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Hello World!</h1>");
    res.end("<p>Hello Server2</p>");
}).listen(8001, () => {
    console.log("Port 8001 opened.");
})

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Hello World!</h1>");
    res.end("<p>Hello Server3</p>");
}).listen(8002, () => {
    console.log("Port 8002 opened.");
})