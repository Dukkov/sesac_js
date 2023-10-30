let number = 1;
number = "HI";
// console.log(number);

let person = {
    name: "Mike", 
    age: 27, 
    job: "homeless"
};

console.log(person);
person.location = "Seoul";
console.log(person.name);
console.log(person.location);
person.age = 30;
console.log(person);
delete person.location;
console.log(person);

let car = {
    brand: "BMW",
    year: 2020,
    start: function() {
        return "brrrrr";
    },
    stop: function() {
        return "skirrrrt";
    }
};

console.log(car);
console.log(car.start());