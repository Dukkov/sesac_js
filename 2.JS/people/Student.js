const Person = require("./Person");

class Student extends Person {
    constructor(name, age, gender, ID, major) {
        super(name, age, gender);
        this._ID = ID;
        this._major = major;
    }

    study() {
        console.log(`Student ${this._name} is now studying ${this._major}.`);
    }
}

module.exports = Student;