function greet() {
    console.log("Well Met!");
    // conole.log("Error");
}
greet();

function greetByName(name) {
    console.log(`Greetings, guest ${name}`);
}
greetByName("Mike");
greetByName("Alice");

function sum(a, b) {
    // console.log({a, b});
    let result = a + b;
    return result;
}

function sub(a, b) {
    let result = Math.abs(a - b);
    return result;
}

function div(a, b) {
    let result = a / b;
    if (b == 0) {
        console.log("Cannot divided by zero");
        return ("Error");
    }
    return result;
}

function mul(a, b) {
    let result = a * b;
    return result;
}

console.log(sum(2, 3));
console.log(sub(2, 3));
console.log(div(2, 3));
console.log(mul(2, 3));

let result = (a, b) => {
    return a * b;
}
console.log(result(2, 4));

console.log("-----TC-----");
console.log(sum(2,3));
console.log(sub(2,5));
console.log(mul(10,100));
console.log(div(10,"0"));
console.log(sum("10",5));