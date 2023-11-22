import express from "express";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.json());

const users = [
    { id: 1, username: "dukov", password: "qwer1234" },
    { id: 2, username: "marine", password: "assei" }
];

app.post("/login", (req, resp) => {
    // const { id, pw } = req.query;
    const {username, password } = req.body;
    console.log(username, password);
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        console.log("log in done");
        resp.json({ message: "로그인 성공" });
    }
    else {
        console.log("log in failed");
        resp.status(401).json({ message: "로그인 실패" });
    }
});

app.get("/", (req, resp) => {
    resp.send();
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});