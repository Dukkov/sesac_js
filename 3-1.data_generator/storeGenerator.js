import fs from "fs";
import {v4 as uuidv4} from "uuid";
import { districtOfCity } from "./districtOfCity.js";
import { storeNameOfDistrict } from "./storeNameOfDistrict.js";

const storeTypeFile = fs.readFileSync("./storeElements.json", "utf8");

export class StoreData {
    storeIdGenerate() {
        this.storeId = uuidv4();
    }

    storeAddressGenerate() {
        this.storeAddressCity = "서울";
        this.storeAddressDistrict = districtOfCity(this.storeAddressCity);
        this.storeAddressRoad = (Math.floor(Math.random() * 100) + 1) + (Math.random() < 0.5 ? "길" : "로");
        this.storeAddressNum = Math.floor(Math.random() * 100) + 1;
        this.storeAddress = `${this.storeAddressCity} ${this.storeAddressDistrict} ${this.storeAddressRoad} ${this.storeAddressNum}`;
    }

    storeTypeGenerate() {
        const storeTypeData = JSON.parse(storeTypeFile);
        this.storeType = storeTypeData.burgerBrand[Math.floor(Math.random() * 8)];
    }

    storeNameGenerate() {
        this.storeName = `${this.storeType} ${storeNameOfDistrict(this.storeAddressDistrict)}`;
    }
}

const storeDataArr = [];

for (let i = 0; i < 100; i++) {
    const storeInstance = new StoreData();
    storeInstance.storeIdGenerate();
    storeInstance.storeAddressGenerate();
    storeInstance.storeTypeGenerate();
    storeInstance.storeNameGenerate();
    storeDataArr.push(storeInstance);
}

const storeDataCsv = storeDataArr.map(store => `${store.storeId},${store.storeName},${store.storeType},${store.storeAddress}`).join("\n");
const storeDataCsvHeader = "Id,Name,Type,Address\n";
fs.writeFileSync("store.csv", storeDataCsvHeader, "utf8");
fs.appendFileSync("store.csv", storeDataCsv, "utf8");