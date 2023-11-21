import express from "express";
import nunjucks from "nunjucks"
import path from "path";
import csvtojson from "csvtojson";

const app = express();
const port = 3000;
const __dirname = path.resolve();
const userDataJson = await new Promise((resolve) => {
    const jsonArr = [];

    csvtojson()
        .fromFile(path.join(__dirname, "public", "static", "user.csv"), "utf8")
        .subscribe((jsonObj, lineNumber) => {
            if (lineNumber >= 0 && lineNumber < 200) 
                jsonArr.push(jsonObj);
        })
        .on("done", () => {
            resolve(jsonArr);
        })
});

nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.use("/static", express.static(path.join(__dirname, "public", "static")));

app.set("view engine", "html");

app.use((req, resp, next) => {
    const start = Date.now();

    resp.on("finish", () => {
        const end = Date.now();
        const duration = end - start;

        console.log(`request: ${req.path}, response: ${duration}`);
    });

    next();
});

app.get("/", (req, resp) => {
    const itemsPerPage = 15;
    const page = req.query.page || 1;
    const startIndex = itemsPerPage * (page - 1);
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(userDataJson.length / itemsPerPage);
    const slicedData = userDataJson.slice(startIndex, endIndex);
    resp.render("index", { userDataJson: slicedData, title: "Hello", totalPage: parseInt(totalPages), currentPage: parseInt(page)});
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});