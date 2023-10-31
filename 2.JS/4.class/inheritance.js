class Animal {
    constructor(name) {
        this._name = name;
    }
    sound() {
        return ("some sound");
    }
}

class Dog extends Animal {
    sound() {
        return ("bow wow");
    }
}

const myDog = new Dog("kitty");
console.log(myDog.sound());