import express from "express";
import nunjucks from "nunjucks";

const app = express();
const port = 3000;

nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.set("view engine", "html");

app.get("/", (req, resp) => {
    resp.render("index", { title: "nunjucks앱", message: "헤딩1" });
});

app.get("/greeting", (req, resp) => {
    const userName = "Dukov";

    resp.render("greeting", { title: "Hello there!", username: userName });
});

app.get("/welcome", (req, resp) => {
    const isAdmin = true;
    resp.render("welcome", { isAdmin: isAdmin });
});

app.get("/fruits", (req, resp) => {
    const fruits = ["Apple", "Banana"];
    resp.render("fruits", { fruits: fruits});
});

app.get("/page", (req, resp) => {
    const data = {
        title: "마이 페이지",
        content: "여기에 텍스트 입력"
    };
    resp.render("main", data);
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});