class Shape {
    constructor(type) {
        this._type = type;
    }
    getArea() {
        return (0);
    }
    
    getInfo() {
        return ("객체정보");
    }

    toString() {
        return (`${this._type} - Area: ${this.getArea()}`);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("Square");
        this._sideLength = sideLength; 
    }

    getArea() {
        return (this._sideLength ** 2);
    }

    getInfo() {
        return (`정사각형, 한 변은 ${this._sideLength}`);
    }
}

class Triangle extends Shape {
    constructor(bottom, height) {
        super("Triangle");
        this._bottom = bottom;
        this._height = height;
    }

    getArea() {
        return ((this._bottom * this._height) / 2);
    }
}

class Trapezoid extends Shape {
    constructor(top, bottom, height) {
        super("Trapezoid");
        this._top = top;
        this._bottom = bottom;
        this._height = height;
    }

    getArea() {
        return ((this._top + this._bottom) * (this._height / 2));
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this._radius = radius;
    }

    getArea() {
        return (Math.PI * (this._radius ** 2));
    }
}

const mySquare = new Square(5);
const myTriangle = new Triangle(5, 2);
const myTrapezoid = new Trapezoid(8, 13, 7);
const myCircle = new Circle(6);
console.log(mySquare.getArea());
console.log(mySquare.getInfo());
console.log(myTriangle.getArea());
console.log(myTrapezoid.getArea());
console.log(myCircle.getArea());
console.log(myCircle.toString());
