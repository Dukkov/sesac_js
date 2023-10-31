class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get diameter() {
        return (this._radius * 2);
    }
    set diameter(diameter) {
        this._radius = diameter / 2;
    }
}

const myCircle = new Circle(5);
myCircle.diameter = 50;
console.log(myCircle.diameter);