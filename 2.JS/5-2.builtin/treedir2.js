import fs from "fs";
import readline  from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function treeDir(pathName) {
    fs.readdir(pathName, { withFileTypes: true }, (e, data) => {
        for (const element of data) {
            const filePath = `${pathName}/${element.name}`;
            if (element.isDirectory()) {
                console.log("--");
                treeDir(filePath);
            }
            else
                console.log(element.name);
        }
    });
}

rl.question("input the path: ", (pathName) => {
    treeDir(pathName);
    rl.close();
});