import readline from "readline";
import GenericCalc from "./genericCalc.js";
import EngineerCalc from "./engineerCalc.js";

const genericInstance = new GenericCalc();
const engineerInstance = new EngineerCalc();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Select Mode.\n1. Generic Calculator\n2. Engineering Calculator\nPress 'n' to exit.", (input) => {
    while(input != "n") {
        if (input != 1 && input != 2) {
            console.log("Error: input 1 or 2.");
            continue;
        }
    }
})
console.log(genericInstance.sum(5, 3));
console.log(genericInstance.div(50, 0));
console.log(engineerInstance.square(3, 0));