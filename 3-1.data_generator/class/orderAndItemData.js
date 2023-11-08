import { v4 as uuidv4} from "uuid";
import { OrderandItemComponent } from "./orderAndItemComponent.js";
import _ from "lodash";

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
// console.time("execution_time");
// const orderAndItemDataArr = [];
// const orderAndItemInstance = new OrderAndItemData();
// const orderAndItemDataCsvHeader = "Id,OrderId,ItemId";
// fs.writeFileSync("../csv/orderitem.csv", orderAndItemDataCsvHeader, "utf8");

// for (let i = 0; i < 50000; i++) {
//     orderAndItemDataArr.push(_.cloneDeep(orderAndItemInstance));
//     orderAndItemInstance.reset();
//     if (orderAndItemDataArr.length >= 10000) {
//         const orderAndItemDataCsv = "\n" + orderAndItemDataArr.map(orderAndItem => `${orderAndItem.orderAndItemId},${orderAndItem.orderAndItemOrderId},${orderAndItem.orderAndItemItemId}`).join("\n");
//         fs.appendFileSync("../csv/orderitem.csv", orderAndItemDataCsv, "utf8");
//         orderAndItemDataArr.length = 0;
//     }
// }
// console.timeEnd("execution_time");