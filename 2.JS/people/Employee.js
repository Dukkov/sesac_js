const Person = require("./Person");

class Employee extends Person {
    constructor(name, age, gender, jobTitle, salary) {
        super(name, age, gender);
        this._jobTitle = jobTitle;
        this._salary = salary;
    }

    info() {
        let possessive;
        if (this._gender == "female")
            possessive = "her";
        else
            possessive = "his"
        console.log(`${this._name} is the ${this._jobTitle}, and ${possessive} annual salary is $${this._salary}.`);
    }

    work() {
        console.log (`${this._name} is now working...`);
    }
}

module.exports = Employee;