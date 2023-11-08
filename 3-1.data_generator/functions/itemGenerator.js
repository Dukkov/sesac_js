import fs from "fs";
import path from "path";
import { ItemData } from "../class/itemData.js";
import _ from "lodash";

export function itemGenerator(num) {
    const itemInstance = new ItemData();
    const itemDataArr = [];

    for (let i = 0; i < num; i++) {
        itemDataArr.push(_.cloneDeep(itemInstance));
        itemInstance.reset();
    }

    const itemDataCsv = itemDataArr.map(item => `${item.itemId},${item.itemName},${item.itemType},${item.itemUnitPrice}`).join("\n");
    const itemDataCsvHeader = "Id,Name,Type,UnitPrice\n";
    fs.writeFileSync(path.join("./csv", "item.csv"), itemDataCsvHeader, "utf8");
    fs.appendFileSync(path.join("./csv", "item.csv"), itemDataCsv, "utf8");
}