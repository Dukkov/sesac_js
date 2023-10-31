class MathOperation {
    static add(x, y) {
        return (x + y);
    }
    static sub(x, y) {
        return (x - y);
    }
}

class Test {
    sum(x, y) {
        return (x + y);
    }
    toString() {
        return "sum";
    }
}
test1 = new Test();
console.log(MathOperation.add(5, 3));
console.log(Test);