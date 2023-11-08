import fs from "fs";
import path from "path";

export class OrderandItemComponent {
    constructor() {
        const orderInfoFile = fs.readFileSync(path.join("./csv", "order.csv"), "utf8");
        const orderData = orderInfoFile.split(/\n|\r/);
        orderData.shift();
        this.orderDataArr = orderData.map(data => {
            const orderDataLine = data.split(",");
            return (orderDataLine[0]);
        })

        const itemInfoFile = fs.readFileSync(path.join("./csv", "item.csv"), "utf8");
        const itemData = itemInfoFile.split(/\n|\r/);
        itemData.shift();
        this.itemDataArr = itemData.map(data => {
            const itemDataLine = data.split(",");
            return (itemDataLine[0]);
        })
    }
}