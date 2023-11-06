import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const itemInfoFile = fs.readFileSync("./itemElements.json", "utf8");

export class ItemData {
    itemIdGenerate() {
        this.itemId = uuidv4();
    }

    itemInfoGenerate() {
        const itemInfoData = JSON.parse(itemInfoFile);
        const itemInfoKeys = Object.keys(itemInfoData);
        const itemInfoRandomKey = itemInfoKeys[Math.floor(Math.random() * itemInfoKeys.length)];
        this.itemName = itemInfoData[itemInfoRandomKey].name;
        this.itemType = itemInfoData[itemInfoRandomKey].type;
        this.itemUnitPrice = itemInfoData[itemInfoRandomKey].price;
    }
}

const itemDataArr = [];

for (let i = 0; i < 20; i++) {
    const itemInstance = new ItemData();
    itemInstance.itemIdGenerate();
    itemInstance.itemInfoGenerate();
    itemDataArr.push(itemInstance);
}

const itemDataCsv = itemDataArr.map(item => `${item.itemId},${item.itemName},${item.itemType},${item.itemUnitPrice}`).join("\n");
const itemDataCsvHeader = "Id,Name,Type,UnitPrice\n";
fs.writeFileSync("item.csv", itemDataCsvHeader, "utf8");
fs.appendFileSync("item.csv", itemDataCsv, "utf8");