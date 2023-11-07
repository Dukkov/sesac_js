import fs from "fs";
import { OrderAndItemData } from "../class/orderAndItemData.js";
import _ from "lodash";

export function orderAndItemGenerator(num) {
    const orderAndItemInstance = new OrderAndItemData();
    const orderAndItemDataArr = [];

    for (let i = 0; i < num; i++) {
        orderAndItemDataArr.push(_.cloneDeep(orderAndItemInstance));
        orderAndItemInstance.reset();
    }

    const orderAndItemDataCsv = orderAndItemDataArr.map(orderAndItem => `${orderAndItem.orderAndItemId},${orderAndItem.orderAndItemOrderId},${orderAndItem.orderAndItemItemId},`).join("\n");
    const orderAndItemDataCsvHeader = "Id,OrderId,ItemId\n";
    fs.writeFileSync("./csv/orderitem.csv", orderAndItemDataCsvHeader, "utf8");
    fs.appendFileSync("./csv/orderitem.csv", orderAndItemDataCsv, "utf8");
}