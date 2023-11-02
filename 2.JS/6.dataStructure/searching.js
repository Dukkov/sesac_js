const numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 10000));

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target)
            return (i);
    }
    return ("Fail");
}

const arr = [1, 6, 8, 10, 50, 24, 44];
console.time("linearSearch");
console.log(linearSearch(arr, 8));
console.timeEnd("linearSearch");