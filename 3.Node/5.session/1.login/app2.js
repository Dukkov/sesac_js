import express from "express";
import session from "express-session";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true
}));

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, resp, next) => {
    req.session.visitCount = req.session.visitCount || 0;
    req.session.visitCount++;
    console.log("SessionID", req.sessionID);
    console.log("SessionInfo", req.session.visitCount);

    next();
});

const users = [
    { id: 1, username: "dukov", password: "qwer1234" },
    { id: 2, username: "marine", password: "assei" },
    { id: 2, username: "yanggang", password: "nimo" },
    { id: 2, username: "admin", password: "1111" }
];

app.post("/login", (req, resp) => {
    // const { id, pw } = req.query;
    const {username, password } = req.body;
    console.log(username, password);
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        console.log("log in done");
        req.session.user = user;
        resp.json({ message: "로그인 성공" });
    }
    else {
        console.log("log in failed");
        resp.status(401).json({ message: "로그인 실패" });
    }
});

app.get("/profile", (req, resp) => {
    const user = req.session.user;

    if(user)
        resp.json({ username: user.username, message: "프로필 정보" });
    else
        resp.status(401).json({ message: "로그인 실패"});
});

app.get("/logout", (req, resp) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("error", err);
            resp.status(500).json({ message: "로그아웃 실패" });
        }
        else
            resp.json({ message: "로그아웃 성공" });
    });
});

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/login", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/checkUser", (req, resp) => {
    const user = req.session.user;

    if(user)
        resp.json({ username: user.username });
    else
        resp.status(401).json({ message: "로그인 실패"});
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});