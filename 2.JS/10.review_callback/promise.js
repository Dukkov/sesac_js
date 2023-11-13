// const myPromise = new Promise((resolve, reject) => {

// })

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand >= 0.5)
                resolve("job done");
            else
                reject("error"); 
        }, 1000);
    })
}

asyncTask()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })