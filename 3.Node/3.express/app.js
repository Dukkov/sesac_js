import express from "express";

const app = express();
const port = 3000;

function myLogger(req, resp, next) {
    const date = new Date(Date.now());
    const formattedTime = date.toLocaleString();
    console.log(`${formattedTime}: LOG MESSAGE`);
    next();
}

function requestTime(req, resp, next) {
    req.requestedTime = Date.now();
    next();
}

app.use(myLogger);
app.use(requestTime);

app.get("/", (req, resp) => {
    console.log(req.requestedTime);
    resp.send("Hellow, World");
});

app.listen(port, () => {
    console.log(`${port} opened.`)
});