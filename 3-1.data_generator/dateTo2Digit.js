export function dateTo2Digit(data) {
    const timeData = parseInt(data);
    if (timeData < 10)
        return (`0${timeData}`);
    else
        return data;
}