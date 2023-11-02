const http = require("http");

const options = {
    hostname: "www.example.com",
    port: 80,
    path: "/",
    method: "GET"
};

const req = http.request(options, (res) => {
    console.log(`state: ${res.statusCode}`);
    res.on("data", (chunk) => {
        console.log(`received: ${chunk}`);
    });
});

req.on("err", (e) => {
    console.error(`error: ${e}`);
});

req.end();