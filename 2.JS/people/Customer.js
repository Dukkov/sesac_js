const Person = require("./Person");

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

module.exports = Customer;