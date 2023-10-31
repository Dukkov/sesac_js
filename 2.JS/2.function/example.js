function max(num1, num2) {
    if (num1 > num2)
        return (num1);
    else
        return (num2);
}

function arrMax(arr) {
    let result = arr[0];
    for (element of arr) {
        if (result < element)
            result = element;
    }
    return (result);
}

function min(num1, num2) {
    if (num1 < num2)
        return (num1);
    else
        return (num2);
}

function arrMin(arr) {
    let result = arr[0];
    for (element of arr) {
        if (result > element)
            result = element;
    }
    return (result);
}

function arrAvg(arr) {
    let result = 0;
    for (element of arr) {
        result += element;
    }
    result /= arr.length;
    return (result);
}
const num1 = 10;
const num2 = 20;
const numbers = [1, 2, 3, 4, 5];

console.log(max(num1, num2));
console.log(min(num1, num2));
console.log(arrMax(numbers));
console.log(arrMin(numbers));
console.log(arrAvg(numbers));