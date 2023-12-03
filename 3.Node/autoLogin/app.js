import express from "express";
import session from "express-session";
import path from "path";
import { router as mainRouter } from "./src/routes/mainRoutes.js";

const app = express();
const port = 8000;
const __dirname = path.resolve();

app.use(session({
    secret: "forbiddenKey",
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "public", "views"));

app.use("/", mainRouter);

app.listen(port, () => {
    console.log(`Port ${port} ready`);
});