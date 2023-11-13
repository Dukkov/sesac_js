function asyncTask(callback) {
    setTimeout(() => {
        const rand = Math.random();
        if (rand >= 0.5)
            callback(null, "job done");
        else
            callback("error", null); 
    }, 1000);
}

console.log("start");
asyncTask((err, res) => {
    if (err)
        console.error("error");
    else
        console.log(res);
});
console.log("end");