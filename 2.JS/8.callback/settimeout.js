console.log("Start");
// setTimeout(sayHello, 2000);
console.log("After calling");

// function sayHello() {
//     console.log("This is callback function.");
// }
console.log("Terminated");

setTimeout(() => {
    console.log("This is callback function.")
}, 1000);