function asyncFunc1(response, callback) {
    setTimeout(() => {
        console.log("job1 done");
        callback("result1");
    }, 1000);
}

function asyncFunc2(response, callback) {
    setTimeout(() => {
        console.log("job2 done");
        callback("result2");
    }, 1000);
}

asyncFunc1(null, function(response1) {
    asyncFunc2(response1, function(response2) {
        asyncFunc1(response2, function(response3) {
            asyncFunc2(response3, function(response4) {
                console.log(response4);
            })
        })
    })
})