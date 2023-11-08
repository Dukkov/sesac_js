import fs from "fs";
import path from "path";

export class StoreComponent {
    constructor() {
        const storeTypeFile = fs.readFileSync(path.join("./JSON", "storeElements.json"), "utf8");
        this.storeTypeData = JSON.parse(storeTypeFile);
    }
}