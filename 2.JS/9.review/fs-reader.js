import fs from "fs";

fs.readFile("./item.csv", "utf8", (e, data) => {
    if (e) {
        console.log("error");
        return;
    }

    const rows = data.split("\n");

    console.log(data);
    let i = 0;
    for (const element of rows) {
        const col = element.split(",");
        console.log(`행 ${i++ + 1}: ${col}`);
    }
})