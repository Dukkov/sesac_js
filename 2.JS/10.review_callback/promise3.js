function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("job1 done");
            resolve("result1");
        }, 1000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("job2 done");
            resolve("result2");
        }, 1000);
    });
}

async function executeOperations() {
    try {
        const response1 = await asyncFunc1();
        const response2 = await asyncFunc2(response1);
        const response3 = await asyncFunc1(response2);
        const response4 = await asyncFunc2(response3);
        console.log(response4);
    } catch(e) {
        console.error("error");
    }
}

executeOperations();