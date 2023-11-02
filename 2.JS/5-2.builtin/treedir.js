import fs from "fs";
import readline  from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function treeDir(path) {
    try {
        const dirArr = fs.readdir(path, {withFileTypes: true});
        console.log("hi");
        for (element of dirArr) {
            const filePath = `${path}/${element.name}`;

            if (element.isDirectory())
                treeDir(filePath);
            else 
                console.log(filePath);
        }
    } catch(e) {
        console.log("Error");
    }
}

rl.question("Input the path: ", (input) => {
    treeDir(input);
    rl.close();
});