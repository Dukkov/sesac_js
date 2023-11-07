import fs from "fs";

export class StoreComponent {
    constructor() {
        const storeTypeFile = fs.readFileSync("./JSON/storeElements.json", "utf8");
        this.storeTypeData = JSON.parse(storeTypeFile);
    }
}