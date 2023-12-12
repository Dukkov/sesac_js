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
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.post("/login", (req, resp) => {
    const { id, password } = req.body;

    if (id === "user" && password === "pass")
        req.flash("message", [
            { type: "success", text: "Login done" },
            { type: "info", text: "New version released" },
            { type: "warning", text: "Old version will be depricated within a month" }
        ]);
    else
        req.flash("error", "Login failed. Try again");
    
    resp.redirect("/login");
});

app.get("/login", (req, resp) => {
    resp.render("login", {
        successMsg: req.flash("message"),
        errorMsg: req.flash("error")
    });
});

app.get("/", (req, resp) => {
    const successMsg = req.flash("success");
    const errorMsg = req.flash("error");

    resp.json({ successMsg, errorMsg });
});

app.listen(port, () => {
    console.log(`Port ${port} ready`);
});