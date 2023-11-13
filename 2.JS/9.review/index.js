import { readCsv, writeCsv } from "./my_csv_lib.js";

const sampleCsv = [
    ["name","birthdate","gender"],
    ["mike","0113","male"],
    ["leora","1222","female"],
    ["duke","0517","female"]
]
console.log("write start");
writeCsv("./test1.csv", JSON.stringify(sampleCsv), console.log);
console.log("write end");
console.log("read start");
readCsv("./test.csv", console.log);
console.log("read end");