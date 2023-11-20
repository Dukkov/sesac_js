// 날짜 정보를 받아서 2자리수 날짜 정보로 변환해 반환하는 함수
export function dateTo2Digit(data) {
    const timeData = parseInt(data);
    if (timeData < 10)
        return (`0${timeData}`);
    else
        return data;
}