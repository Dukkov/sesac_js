import fs from "fs";
import path from "path";

export class ItemComponent {
    constructor() {
        const itemInfoFile = fs.readFileSync(path.join("./JSON", "itemElements.json"), "utf8");
        this.itemInfoData = JSON.parse(itemInfoFile);
        this.itemInfoKeys = Object.keys(this.itemInfoData);
    }
}