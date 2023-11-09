import fs from "fs";
import path from "path";

// storeElements.json에 있는 store 정보를 읽어와서 storeTypeData에 저장하는 클래스
export class StoreComponent {
    constructor() {
        const storeTypeFile = fs.readFileSync(path.join("./JSON", "storeElements.json"), "utf8");
        this.storeTypeData = JSON.parse(storeTypeFile);
    }
}