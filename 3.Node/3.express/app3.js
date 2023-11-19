import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, resp) => {
    resp.send("Hello, get2");
});

app.get("/about", (req, resp) => {
    resp.send("Hello, about");
});

app.get("/user/:id", (req, resp) => {
    const uid = req.params.id;
    resp.send(`
        <html>
        <body>
        <h1>Hello, user ${uid}</h1>
        <p>my profile</p>
        <img src = "/image/tux_cat.jpg">
        </body>
        </html>
    `);
});

app.get("/search", (req, resp) => {
    const keyword = req.query.keyword;
    resp.send(`keyword: ${keyword}`);
});

app.get("/shopping", (req,resp) => {
    const cat = req.query.category;
    const item = req.query.item;
    resp.send(`keyword: ${cat}, ${item}`);
});

app.use((req, resp) => {
    resp.status(404).send(`<h1>Page not found</h1>`);
});

app.listen(port, () => {
    console.log(`Port ${port} opened.`);
});