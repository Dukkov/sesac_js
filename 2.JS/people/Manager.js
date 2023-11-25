const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, age, gender, jobTitle, salary, team) {
        super(name, age, gender, jobTitle, salary);
        this._team = team;
    }

    assignTasks() {
        let possessive;
        if (this._gender == "female")
            possessive = "her";
        else
            possessive = "his"
        console.log (`The manager, ${this._name} is now assigning works to ${possessive} team.`);
    }

    greet () {
        console.log (`Hello. My name is ${this._name}. I'm manager, and ${this._jobTitle} in this company.`);
    }
}

module.exports = Manager;