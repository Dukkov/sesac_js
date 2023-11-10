import fs from "fs";
import path from "path";
import { StoreData } from "../class/storeData.js";

// store.csv를 생성하는 함수
export async function storeGenerator(num) {
    const storeInstance = new StoreData();
    const storeDataArr = [];

    // store 정보를 생성하는 StoreData 클래스의 인스턴스를 배열에 복사하고 인스턴스를 reset하는 과정을 num번 반복함
    for (let i = 0; i < num; i++) {
        storeDataArr.push(storeInstance.getStoreData());
        storeInstance.reset();
    }

    const storeDataCsv = storeDataArr.map(store => `${store.storeId},${store.storeName},${store.storeType},${store.storeAddress}`).join("\n");
    const storeDataCsvHeader = "Id,Name,Type,Address\n";
    fs.writeFileSync(path.join("./csv", "store.csv"), storeDataCsvHeader, "utf8");
    fs.appendFileSync(path.join("./csv", "store.csv"), storeDataCsv, "utf8");
}
