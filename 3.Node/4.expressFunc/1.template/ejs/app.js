import express from "express";

const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, resp) => {
    resp.render("index", { title: "Express앱", message: "EJS 첫걸음" });
});

app.get("/greeting", (req, resp) => {
    const userName = "Dukov";

    resp.render("greeting", { title: "Hello there!", username: userName });
});

app.get("/welcome", (req, resp) => {
    const isAdmin = false;
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