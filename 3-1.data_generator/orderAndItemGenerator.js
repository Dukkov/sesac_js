import fs from "fs";
import { v4 as uuidv4} from "uuid";

const orderInfoFile = fs.readFileSync("./order.csv", "utf8");
const itemInfoFile = fs.readFileSync("./item.csv", "utf8");

export class OrderAndItemData {
    orderAndItemIdGenerate() {
        this.orderAndItemId = uuidv4();
    }
    orderIdExtract() {
        const orderData = orderInfoFile.split(/\n|\r/);
        orderData.shift();
        const orderDataArr = orderData.map(data => {
            const orderDataLine = data.split(",");
            return (orderDataLine[0]);
        })
        this.orderAndItemOrderId = orderDataArr[Math.floor(Math.random() * orderDataArr.length)];
    }
    itemIdExtract() {
        const itemData = itemInfoFile.split(/\n|\r/);
        itemData.shift();
        const itemDataArr = itemData.map(data => {
            const itemDataLine = data.split(",");
            return (itemDataLine[0]);
        })
        this.orderAndItemItemId = itemDataArr[Math.floor(Math.random() * itemDataArr.length)];
    }
}

const oAndI1 = new OrderAndItemData();
oAndI1.orderAndItemIdGenerate();
oAndI1.orderIdExtract();
oAndI1.itemIdExtract();

console.log(oAndI1.orderAndItemId);
console.log(oAndI1.orderAndItemOrderId);
console.log(oAndI1.orderAndItemItemId);