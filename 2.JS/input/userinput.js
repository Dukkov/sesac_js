import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("input: ", (input) => {
    const num = parseInt(input);

    if (!isNaN(num) && num > 0 && num < 10) {
        console.log(`${num}단: `);
        for (let i = 1; i < 10; i++)
            console.log(`${num} * ${i} = ${num * i}`);
    }
    else    
        console.log("err");

    rl.close();
});