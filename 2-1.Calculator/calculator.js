let input = document.getElementById("input");
let record = document.getElementById("record");
let operand1;
let operator = 0;
let operand2;
let flag = 0;
let calMemory = null;

function numInput(num) {
    if (input.innerText == "0" || flag == 1) {
        input.innerText = `${num}`;
        flag++;
    }
    else
        input.innerText += `${num}`;
}

function operatorInput(operatorSign) {
    operand1 = parseFloat(input.innerText);
    record.innerText = input.innerText + operatorSign;
    operator = record.innerText.slice(-1);
    flag = 1;
}

function invertInput() {
    input.innerText = parseFloat(input.innerText) * -1;
}

function dotInput() {
    input.innerText += ".";
}

function clearInput() {
    input.style.fontSize = "45px";
    record.innerHTML = "&nbsp;";
    input.innerText = 0;
    operator = 0;
}

function enterInput() {
    if (operator != 0) {
        operand2 = parseFloat(input.innerText);
        if (operator != "÷" && operand2 != 0)
            record.innerText += `${operand2}=`;
        switch (operator) {
            case "÷":
                input.innerText = operand1 / operand2;
                try {
                    if (operand2 == 0)
                        throw new Error("0으로 나눌 수 없습니다");
                } catch(err) {
                    input.style.fontSize = "29px";
                    input.innerText = err.message;
                }
                break;
            case "×":
                input.innerText = Math.round(operand1 * operand2 * 10) / 10;
                break;
            case "-":
                input.innerText = operand1 - operand2;
                break;
            case "+":
                input.innerText = operand1 + operand2;
                break;
        }
        calMemory = parseFloat(input.innerText);
    }
    else
        record.innerText = `${input.innerText}=`;
}

function deleteInput() {
    if (typeof(calMemory) == "number")
        record.innerHTML = "&nbsp;";
    else {
        input.innerText = input.innerText.slice(0, -1);
    }
}