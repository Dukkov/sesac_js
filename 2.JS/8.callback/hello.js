function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}

greet("Robert", console.log);