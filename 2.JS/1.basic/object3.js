const numbers = [10, 20, 30, 5, 3, 1, 50];

function max(num_arr) {
    let result = num_arr[0];
    for (element of num_arr) {
        if (element > result)
            result = element;
    }
    return (result);
}

console.log(max(numbers));