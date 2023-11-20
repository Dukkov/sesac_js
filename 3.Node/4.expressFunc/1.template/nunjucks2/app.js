import express from "express";
import nunjucks from "nunjucks";

const app = express();
const port = 3000;

nunjucks.configure("views", { express: app });
app.set("view engine", "html");

app.get("/page", (req, resp) => {
    const data = {
        title: "마이페이지",
        content: "여기에 텍스트 입력"
    };
    resp.render("page", data);
})

app.listen(port, () => {
    console.log(`Port ${port} has opened`);
});