import fs from "fs";

export class ItemComponent {
    constructor() {
        const itemInfoFile = fs.readFileSync("./JSON/itemElements.json", "utf8");
        this.itemInfoData = JSON.parse(itemInfoFile);
        this.itemInfoKeys = Object.keys(this.itemInfoData);
    }
}