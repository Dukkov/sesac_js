class Car {
    constructor(make, model) {
        this._make = make;
        this._model = model;
    }
    drive() {
        return `${this._make} ${this._model} 주행시작...`;
    }
    stop() {
        return `${this._make} ${this._model} 정지중...`;
    }
}

const myCar = new Car("KIA", "K5");
const yourCar = new Car("Audi", "A8");
console.log(Car._make);
console.log(myCar._make);
// console.log(myCar.drive());
// console.log(myCar.stop());
// console.log(yourCar.drive());
