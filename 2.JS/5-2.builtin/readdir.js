let folder = "../4.class";
let fs = require("fs");

fs.readdir(folder, (err, data) => {
    if (err) {
        console.error("Error");
        return;
    }
    else
        console.log(data);
});