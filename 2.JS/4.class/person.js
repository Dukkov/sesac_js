class Person {
    constructor(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    greet() {
        console.log(`Hi! My name is ${this._name}, ${this._age} years old.`);
    }

    walk() {
        console.log(`${this._name} is walking...`);
    }

    eat() {
        console.log(`${this._name} is eating...`);
    }
}

class Employees extends Person {
    constructor(name, age, gender, position, salary) {
        super();
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._position = position;
        this._salary = salary;
    }

    info() {
        console.log(`${this._name} is ${this._age} years old ${this._gender}. Annual salary is ${this._salary}.`);
    }
}

const mike = new Person("Mike", 32, "man");
const sally = new Employees("Sally", 25, "woman", "director", "$3,000");
mike.greet();
mike.walk();
mike.eat();
sally.greet();
sally.info();