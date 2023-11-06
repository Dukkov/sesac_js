import fs from "fs";
import {v4 as uuidv4} from "uuid";
import { dateOfMonth } from "./dateOfMonth.js";
import { dateTo2Digit } from "./dateTo2Digit.js";

const storeIdFile = fs.readFileSync("./store.csv", "utf8");
const userIdFile = fs.readFileSync("./user.csv", "utf8");

export class orderData {
    orderIdGenerate() {
        this.orderId = uuidv4();
    }

    orderTimeGenerate() {
        const orderTimeYear = Math.floor(Math.random() * 4) + 2020;
        const orderTimeMonth = dateTo2Digit(Math.floor(Math.random() * 12) + 1);
        const orderTimeDay = dateTo2Digit(Math.floor(Math.random() * dateOfMonth(orderTimeMonth)) + 1);
        const orderTimeHour = dateTo2Digit(Math.floor(Math.random() * 24));
        const orderTimeMin = dateTo2Digit(Math.floor(Math.random() * 60));
        const orderTimeSec = dateTo2Digit(Math.floor(Math.random() * 60));
        this.orderTime = `${orderTimeYear}-${orderTimeMonth}-${orderTimeDay} ${orderTimeHour}:${orderTimeMin}:${orderTimeSec}`
    }

    orderStoreIdGenerate() {
        const storeIdData = storeIdFile.split(/\n|\r/);
        storeIdData.shift();
        const storeIdArr = storeIdData.map(data => {
            const storeIdLine = data.split(",");
            return storeIdLine[0]; 
        })
        this.storeId = storeIdArr[Math.floor(Math.random() * storeIdArr.length)];
    }

    orderUserIdGenerate() {
        const userIdData = userIdFile.split(/\n|\r/);
        userIdData.shift();
        const userIdArr = userIdData.map(data => {
            const userIdLine = data.split(",");
            return userIdLine[0]; 
        })
        this.userId = userIdArr[Math.floor(Math.random() * userIdArr.length)];
    }
}

// const order1 = new orderData();
// order1.orderIdGenerate();
// order1.orderTimeGenerate();
// order1.orderStoreIdGenerate();
// order1.orderUserIdGenerate();
// console.log(order1.orderId);
// console.log(order1.orderTime);
// console.log(order1.storeId);
// console.log(order1.userId);
const orderDataArr = [];

for (let i = 0; i < 10000; i++) {
    const orderInstance = new orderData();
    orderInstance.orderIdGenerate();
    orderInstance.orderTimeGenerate();
    orderInstance.orderStoreIdGenerate();
    orderInstance.orderUserIdGenerate();
    orderDataArr.push(orderInstance);
}

const orderDataCsv = orderDataArr.map(order => `${order.orderId},${order.orderTime},${order.storeId},${order.userId}`).join("\n");
const orderDataCsvHeader = "Id,OrderAt,StoreId,UserId\n";
fs.writeFileSync("order.csv", orderDataCsvHeader, "utf8");
fs.appendFileSync("order.csv", orderDataCsv, "utf8");