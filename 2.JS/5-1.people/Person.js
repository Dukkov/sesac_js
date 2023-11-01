class Person {
    constructor(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    greet() {
        let general;
        if (this._gender == "female")
            general = "woman";
        else
            general = "man"
        console.log(`Hi! My name is ${this._name}, and I'm ${this._age} years old ${general}.`);
    }
    walk() {
        console.log(`${this._name} is now walking...`);
    }
    eat() {
        console.log(`${this._name} is now eating...`);
    }
}

module.exports = Person;