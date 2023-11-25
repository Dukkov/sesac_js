const path = require("path");

const filePath = path.join("./", "test.txt");
console.log("path: ", filePath);

const extName = path.extname(filePath);
console.log("extender: ",extName);

const dirName = path.dirname(filePath);
console.log("dir: ", dirName);

const baseName = path.basename(filePath);
console.log("base: ", baseName);