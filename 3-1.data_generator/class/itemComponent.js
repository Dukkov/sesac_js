import fs from "fs";
import path from "path";

// itemElements.json에 있는 item들의 raw data를 읽어오고, 그 key 값들을 itemInfoKeys에 저장하는 클래스
export class ItemComponent {
    constructor() {
        const itemInfoFile = fs.readFileSync(path.join("./JSON", "itemElements.json"), "utf8");
        this.itemInfoData = JSON.parse(itemInfoFile);
        this.itemInfoKeys = Object.keys(this.itemInfoData);
    }
}