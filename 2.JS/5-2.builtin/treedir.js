import fs from "fs";
import readline  from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("input the path: ", (pathName) => {
    treeDir(pathName, 0);
    rl.close();
});

function treeDir(pathName, depth) {
    const data = fs.readdirSync(pathName, { withFileTypes: true });
        for (const element of data) {
            const filePath = `${pathName}/${element.name}`;
            if (element.isDirectory() && depth == 0) {
                console.log(`${element.name}[D]`);
                treeDir(filePath, 1);
            }
            else if (element.isDirectory()) {
                if (depth > 1) {
                    process.stdout.write("│");
                    process.stdout.write("  │".repeat(depth - 1));
                    console.log(`──${element.name}[D]`);
                }
                else
                    console.log(`├─${element.name}[D]`);
                treeDir(filePath, depth + 1);
            }
            else {
                if (depth > 1) {
                    process.stdout.write("│");
                    process.stdout.write("  │".repeat(depth - 1));
                    console.log(`──${element.name}[F]`);
                }
                else
                    console.log(`├─${element.name}[F]`);
            }
        }
}