let input = document.getElementById("input");
let record = document.getElementById("record");
let operand1;
let operand2;
let flag = 0;

function numInput(num) {
    if (input.innerText == "0")
        input.innerText = `${num}`;
    else
        input.innerText += `${num}`;
}

function operatorInput(operator) {
    operand1 = parseInt(input.innerText);
    record.innerText = input.innerText + operator;
    flag = 1;
}

function clearInput() {
    record.innerHTML = "&nbsp;";
    input.innerText = 0;
}