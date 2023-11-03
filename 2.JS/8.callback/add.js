function add(a, b, callback) {
    const sum = a + b;
    callback(sum);
}

function displayResult(result) {
    console.log(result);
}

const result = add(2, 5, displayResult);