const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error");
        return;
    }
    else
        console.log("Text: ", data);
});

fs.writeFile("test1.txt", "Hello World!", "utf-8", (err, data) => {
    if (err) {
        console.error("Error");
        return;
    }
    else
    console.log("Success");
});

fs.copyFile("test.txt", "test1.txt", (err) => {
    if (err) {
        console.error("Error");
        return;
    }
    else
    console.log("Copy Success");
});