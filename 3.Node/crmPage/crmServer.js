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

app.get("/", (req, resp) => {
    const itemsPerPage = 10;
    const page = req.query.page || 1;
    const startIndex = itemsPerPage * (page - 1);
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(userDataJson.length / itemsPerPage);
    const slicedData = userDataJson.slice(startIndex, endIndex);

    resp.render("index", { userDataJson: slicedData, title: "User list", totalPage: parseInt(totalPages), currentPage: parseInt(page) });
});

app.get("/user", (req, resp) => {
    // const itemsPerPage = 10;
    // const page = req.query.page || 1;
    // // const startIndex = itemsPerPage * (page - 1);
    // // const endIndex = startIndex + itemsPerPage;
    // const totalPages = Math.ceil(userDataJson.length / itemsPerPage);
    // // const slicedData = userDataJson.slice(startIndex, endIndex);
    const userName = req.query.userName;
    const searchResult = userDataJson.filter(u => u.Name.indexOf(userName) != -1);

    resp.render("index", { userDataJson: searchResult, title: "Search result", target: userName});
});

app.get("/user/:id", (req, resp) => {
    const userId = req.params.id;
    const userInfo = userDataJson.find(u => u.Id === userId);

    resp.render("userInfo", { userDataJson: userInfo });
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});