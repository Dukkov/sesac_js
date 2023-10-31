function divide(a, b) {
    try {
        if (typeof(a) != "number" || typeof(b) != "number")
            throw new TypeError("숫자를 입력하세요.")
        if (b == 0)
            throw new Error("0으로 나눌 수 없음");
        if (a.toString().length > 9 || b.toString().length > 9)
            throw new RangeError("9 이하의 길이만 입력 가능");
        return a / b;
    } catch (err) {
        if (err instanceof TypeError)
            console.error("타입 오류: ", err.message);
        else if (err instanceof Error)
            console.error("기타 오류: ", err.message);
        else if (err instanceof RangeError)
            console.error("범위 오류: ", err.message);
    }
}

console.log(divide(5, 1000000000));