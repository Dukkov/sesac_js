import readline from "readline";
import GenericCalc from "./genericCalc.js";
import EngineerCalc from "./engineerCalc.js";

const genericInstance = new GenericCalc();
const engineerInstance = new EngineerCalc();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mode;
function generalCalculator(mode) {
    if (mode == 1) {
        rl.question("Input first operand: ", (operand1) => {
            rl.question("Input operator: ", (operator) => {
                rl.question("Input second operand: ", (operand2) => {
                    switch (operator) {
                        case "+":
                            console.log(genericInstance.sum(parseInt(operand1), parseInt(operand2)));
                            break;
                        case "-":
                            console.log(genericInstance.sub(parseInt(operand1), parseInt(operand2)));
                            break;
                        case "*":
                            console.log(genericInstance.mul(parseInt(operand1), parseInt(operand2)));
                            break;
                        case "/":
                            console.log(genericInstance.div(parseInt(operand1), parseInt(operand2)));
                            break;    
                        default:
                            console.log("Invalid operator");
                    }
                    generalCalculator(1);
                });
            });    
        });
    }
    else if (mode == 2) {
        console.log("Empty!");
        rl.close();
    }
}

function askForMode() {
    rl.question("Select Mode (1.general, 2.engineering, 3.programmer): ", (input) => {
        mode = input;
        if (mode != 1 && mode != 2 && mode != 3 && mode != "n") {
            console.log("Wrong input. Try again.");
            askForMode();
        }
        else if (mode == "n") {
            console.log("Calculator terminated.");
        }
        else {
            generalCalculator(mode);
        }
    });
}

askForMode();