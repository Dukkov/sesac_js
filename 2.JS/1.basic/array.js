const numbers = [1, "1", 2, 3, 4, 5, true, false, null, {key: "value"}];
console.log(numbers);
console.log(numbers[10]);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + 1);
}

numbers.forEach((num) => {
    console.log(num);
});

numbers[2] = "2";
console.log(numbers);
numbers.push("Hello");
console.log(numbers);
numbers.pop();
console.log(numbers);
const new_numbers = numbers.slice(0, 3);
console.log(new_numbers);