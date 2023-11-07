import fs from "fs";
import { StoreData } from "../class/storeData.js";
import _ from "lodash";

export function storeGenerator(num) {
    const storeInstance = new StoreData();
    const storeDataArr = [];

    for (let i = 0; i < num; i++) {
        storeDataArr.push(_.cloneDeep(storeInstance));
        storeInstance.reset();
    }

    const storeDataCsv = storeDataArr.map(store => `${store.storeId},${store.storeName},${store.storeType},${store.storeAddress}`).join("\n");
    const storeDataCsvHeader = "Id,Name,Type,Address\n";
    fs.writeFileSync("./csv/store.csv", storeDataCsvHeader, "utf8");
    fs.appendFileSync("./csv/store.csv", storeDataCsv, "utf8");
}
