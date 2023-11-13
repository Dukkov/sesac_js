import fs from "fs";
import csv from "csv-parser";

const results = [];

fs.createReadStream("./item.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
        console.log(results);
    })