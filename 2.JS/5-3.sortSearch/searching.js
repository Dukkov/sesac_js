function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target)
            return (i);
    }
    return ("Fail");
}

const numbers = [4, 8, 2, 1, 9, 7];
console.log(linearSearch(numbers, 7))