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
}

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

class Customer extends Person {
    constructor(name, age, gender, orderID, orderArr) {
        super(name, age, gender);
        this._orderID = orderID;
        this._orderArr = orderArr;
    }

    placeOrder() {
        console.log(`Customer ${this._name} placed an order.`);
    }

    get orderInfo() {
        return (this._orderArr);
    }
}

const person1 = new Person("Mike", 32, "male");
person1.greet();
person1.walk();
person1.eat();

const employee1 = new Employee("Sally", 27, "female", "manager", 30000);
employee1.greet();
employee1.info();
employee1.work();

const manager1 = new Manager("James", 37, "male", "leader", 60000, "developing");
manager1.assignTasks();
manager1.work();

const student1 = new Student("Rebecca", 20, "female", "2023001", "computer science");
student1.study();
student1.walk();

const customer1 = new Customer("Chris", 30, "male", "C1001", ["order1", "order2"]);
customer1.placeOrder();
console.log(customer1.orderInfo);