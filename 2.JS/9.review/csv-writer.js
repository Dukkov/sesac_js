import fs from "fs";
import { createObjectCsvWriter as createCsvWriter } from "csv-writer";

const csvWriter = createCsvWriter( {
    path: "./test.csv",
    header: [
        { id: "column1", title: "Column 1"},
        { id: "column2", title: "Column 2"}
    ],
});

const data = [
    { column1: "value 1", column2: "value 2" },
    { column1: "value 3", column2: "value 4" }
]

csvWriter.writeRecords(data)
    .then(() => console.log("done"));