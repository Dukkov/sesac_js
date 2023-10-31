let array = [1, 2, 3];

for (element of array) {
    console.log(element);
}

array.forEach(element => {
    console.log(element + 1);
});

const obj = {a: 1, b: 2, c: 3};
for (key in obj) {
    console.log(key, obj[key]);
}

const today = new Date();
console.log(today.toString());