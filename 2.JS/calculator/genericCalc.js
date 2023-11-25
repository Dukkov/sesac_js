export default class GenericCalc {
    sum(operand1, operand2) {
        return (operand1 + operand2);
    }

    sub(operand1, operand2) {
        return (operand1 - operand2);
    }

    mul(operand1, operand2) {
        return (operand1 * operand2);
    }

    div(operand1, operand2) {
        if (operand2 == 0)
            return("Error: cannot be divided by zero");
        return (operand1 / operand2);
    }
}