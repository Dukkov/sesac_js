import express from "express";
import session from "express-session";
import flash from "express-flash";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(session({
    secret: "yourKey",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, resp) => {
    req.flash("info", "Welcome to my homepage");
    resp.redirect("/message");
});

app.get("/message", (req, resp) => {
    resp.render("message", { messages: req.flash() });
});

app.listen(port, () => {
    console.log(`Port ${port} ready`);
});