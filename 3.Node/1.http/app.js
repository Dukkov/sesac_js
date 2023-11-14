import http from "http";

const server = http.createServer();

server.on("request", () => {
    console.log("request recieved");
});

server.on("connection", () => {
    console.log("connected");
});

server.on("close", () => {
    console.log("closed");
});

server.listen(3000);