import fs from "fs";
import path from "path";
import { OrderAndItemData } from "../class/orderAndItemData.js";
import _ from "lodash";

export function orderAndItemGenerator(num) {
    const orderAndItemInstance = new OrderAndItemData();
    const orderAndItemDataArr = [];
    const orderAndItemDataCsvHeader = "Id,OrderId,ItemId";
    fs.writeFileSync(path.join("./csv", "orderitem.csv"), orderAndItemDataCsvHeader, "utf8");

    for (let i = 0; i < num; i++) {
        orderAndItemDataArr.push(_.cloneDeep(orderAndItemInstance));
        orderAndItemInstance.reset();
        if (orderAndItemDataArr.length >= 10000) {
            const orderAndItemDataCsv = "\n" + orderAndItemDataArr.map(orderAndItem => `${orderAndItem.orderAndItemId},${orderAndItem.orderAndItemOrderId},${orderAndItem.orderAndItemItemId}`).join("\n");
            fs.appendFileSync(path.join("./csv", "orderitem.csv"), orderAndItemDataCsv, "utf8");
            orderAndItemDataArr.length = 0;
        }
    }
}