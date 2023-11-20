import express from "express";
import nunjucks from "nunjucks"
import path from "path";
import csvtojson from "csvtojson";

const app = express();
const port = 3000;
const __dirname = path.resolve();

nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.use("/static", express.static(path.join(__dirname, "public", "static")));

app.set("view engine", "html");

app.get("/", async (req, resp) => {
    const userDataJson = await new Promise((resolve) => {
        const jsonArr = [];

        csvtojson()
            .fromFile(path.join(__dirname, "public", "static", "user.csv"), "utf8")
            .subscribe((jsonObj, lineNumber) => {
                if (lineNumber >= 0 && lineNumber < 20)
                    jsonArr.push(jsonObj);
            })
            .on("done", () => {
                resolve(jsonArr);
            })
    });
    resp.render("index", { userDataJson });
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});