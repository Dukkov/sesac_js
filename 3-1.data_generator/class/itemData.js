import { v4 as uuidv4 } from "uuid";
import { ItemComponent } from "./itemComponent.js";


export class ItemData {
    constructor() {
        this.component = new ItemComponent();
        this.init();
    }

    init() {
        this.itemIdGenerate();
        this.itemInfoGenerate();
    }

    reset() {
        this.init();
    }

    itemIdGenerate() {
        this.itemId = uuidv4();
    }

    itemInfoGenerate() {
        const itemInfoRandomKey = this.component.itemInfoKeys[Math.floor(Math.random() * this.component.itemInfoKeys.length)];
        this.itemName = this.component.itemInfoData[itemInfoRandomKey].name;
        this.itemType = this.component.itemInfoData[itemInfoRandomKey].type;
        this.itemUnitPrice = this.component.itemInfoData[itemInfoRandomKey].price;
    }
}

// const itemDataArr = [];

// for (let i = 0; i < 20; i++) {
//     const itemInstance = new ItemData();
//     itemInstance.itemIdGenerate();
//     itemInstance.itemInfoGenerate();
//     itemDataArr.push(itemInstance);
// }

// const itemDataCsv = itemDataArr.map(item => `${item.itemId},${item.itemName},${item.itemType},${item.itemUnitPrice}`).join("\n");
// const itemDataCsvHeader = "Id,Name,Type,UnitPrice\n";
// fs.writeFileSync("./csv/item.csv", itemDataCsvHeader, "utf8");
// fs.appendFileSync("./csv/item.csv", itemDataCsv, "utf8");