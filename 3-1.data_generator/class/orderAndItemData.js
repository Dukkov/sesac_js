import fs from "fs";
import { v4 as uuidv4} from "uuid";
import { OrderandItemComponent } from "./orderAndItemComponent.js";

export class OrderAndItemData {
    constructor() {
        this.component = new OrderandItemComponent();
        this.init();
    }

    init() {
        this.orderAndItemIdGenerate();
        this.orderIdExtract();
        this.itemIdExtract();
    }

    reset() {
        this.init();
    }

    orderAndItemIdGenerate() {
        this.orderAndItemId = uuidv4();
    }
    orderIdExtract() {
        this.orderAndItemOrderId = this.component.orderDataArr[Math.floor(Math.random() * this.component.orderDataArr.length)];
    }
    itemIdExtract() {
        this.orderAndItemItemId = this.component.itemDataArr[Math.floor(Math.random() * this.component.itemDataArr.length)];
    }
}

const orderAndItemDataArr = [];

for (let i = 0; i < 5000; i++) {
    const orderAndItemInstance = new OrderAndItemData();
    orderAndItemInstance.orderAndItemIdGenerate();
    orderAndItemInstance.orderIdExtract();
    orderAndItemInstance.itemIdExtract();
    orderAndItemDataArr.push(orderAndItemInstance);
}

const orderAndItemDataCsv = orderAndItemDataArr.map(orderAndItem => `${orderAndItem.orderAndItemId},${orderAndItem.orderAndItemOrderId},${orderAndItem.orderAndItemItemId}`).join("\n");
const orderAndItemDataCsvHeader = "Id,OrderId,ItemId\n";
fs.writeFileSync("../csv/orderitem.csv", orderAndItemDataCsvHeader, "utf8");
fs.appendFileSync("../csv/orderitem.csv", orderAndItemDataCsv, "utf8");