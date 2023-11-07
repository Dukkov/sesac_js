import fs from "fs";
import { OrderData } from "../class/orderData.js";
import _ from "lodash";

export function orderGenerator(num) {
    const orderInstance = new OrderData();
    const orderDataArr = [];

    for (let i = 0; i < num; i++) {
        orderDataArr.push(_.cloneDeep(orderInstance));
        orderInstance.reset();
    }

    const orderDataCsv = orderDataArr.map(order => `${order.orderId},${order.orderTime},${order.storeId},${order.userId}`).join("\n");
    const orderDataCsvHeader = "Id,OrderAt,StoreId,UserId\n";
    fs.writeFileSync("./csv/order.csv", orderDataCsvHeader, "utf8");
    fs.appendFileSync("./csv/order.csv", orderDataCsv, "utf8");
}