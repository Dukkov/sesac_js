import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(cookieParser());

app.get("/", (req, resp) => {
    resp.cookie("mycookie", "sesac", { maxAge: 10000 });
    resp.send("Cookie generated");
});

app.get("/readcookie", (req, resp) => {
    const myCookie = req.cookies.mycookie;
    console.log(myCookie);

    resp.send(`Your cookie: ${myCookie}`);
});

app.listen(port, () => {
    console.log(`Port ${port} ready`);
});