import express from "express";
import session from "express-session";

const app = express();
const port = 3000;

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true
}));

app.use((req, resp, next) => {
    req.session.visitCount = req.session.visitCount || 0;
    req.session.visitCount++;
    console.log("SessionID", req.sessionID);
    console.log("SessionInfo", req.session.visitCount);

    next();
});

app.get("/", (req, resp) => {
    console.log(req.session);
    resp.send(`당신의 방문횟수: ${req.session.visitCount}`);
});

app.listen(port, () =>{
    console.log(`Port ${port} ready`);
});