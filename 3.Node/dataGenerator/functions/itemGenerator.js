import fs from "fs";
import path from "path";
import { ItemData } from "../class/itemData.js";

// item.csv를 생성하는 함수
export async function itemGenerator(num) {
    const itemInstance = new ItemData();
    const itemDataArr = [];

    // item 정보를 생성하는 ItemData 클래스의 인스턴스를 배열에 복사하고 인스턴스를 reset하는 과정을 num번 반복함
    for (let i = 0; i < num; i++) {
        itemDataArr.push(itemInstance.getItemData());
        itemInstance.reset();
    }

    const itemDataCsv = itemDataArr.map(item => `${item.itemId},${item.itemName},${item.itemType},${item.itemUnitPrice}`).join("\n");
    const itemDataCsvHeader = "Id,Name,Type,UnitPrice\n";
    fs.writeFileSync(path.join("./csv", "item.csv"), itemDataCsvHeader, "utf8");
    fs.appendFileSync(path.join("./csv", "item.csv"), itemDataCsv, "utf8");
}