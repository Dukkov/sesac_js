function performAsyncTask(callback) {
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum < 0.5)
            callback(null, "Success.");
        else
            callback("Error", null);
    }, 2000);
}

for (let i = 0; i < 10; i++) {
    performAsyncTask((e, result) => {
        if (e)
            console.log("Failed.");
        else
            console.log(result);
    });
}