try {
    const a = notDefined * 2;
} catch(error) {
    console.log("Error");
}

function division(a, b) {
    try {
        if (b == 0)
            throw "0으로 나눌 수 없음!";
    } catch(err) {
        console.log("오류: ", err);
    }    
    return (a / b);
}
console.log(division(10, 0));