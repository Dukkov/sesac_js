const Person = require("./Person");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Student = require("./Student");
const Customer = require("./Customer");

const Employee1 = new Employee("john", 20, "male", "manager", "500");
Employee1.greet();
Employee1.info();

const person1 = new Person("Mike", 32, "male");
person1.greet();
person1.walk();
person1.eat();

const employee2 = new Employee("Sally", 27, "female", "manager", 30000);
employee2.greet();
employee2.info();
employee2.work();

const manager1 = new Manager("James", 37, "male", "leader", 60000, "developing");
manager1.assignTasks();
manager1.work();

const student1 = new Student("Rebecca", 20, "female", "2023001", "computer science");
student1.study();
student1.walk();

const customer1 = new Customer("Chris", 30, "male", "C1001", ["order1", "order2"]);
customer1.placeOrder();
console.log(customer1.orderInfo);