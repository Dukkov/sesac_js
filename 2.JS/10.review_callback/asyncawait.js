function externalAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const result = Math.random() >= 0.8;
            if (result)
                resolve("received");
            else
                reject("denied");
        }, 1000);
    });
}

async function waitForResult(cnt) {
    try {
        const result = await externalAPI();
        console.log(result);
        return result;
    } catch (e) {
        console.error(`error. error count: ${++cnt}`);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(waitForResult(cnt));
            }, 2000);
        });
    }
}

waitForResult(0);