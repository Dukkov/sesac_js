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

asyncFunc1()
    .then(asyncFunc2())
    .then(asyncFunc1())
    .then(res => asyncFunc2(res))
    .then(res => asyncFunc1(res))
    .then(response4 => {
        console.log(response4);
    })