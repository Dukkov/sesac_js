import {v4 as uuidv4} from "uuid";
import { districtOfCity } from "../functions/districtOfCity.js";
import { storeNameOfDistrict } from "../functions/storeNameOfDistrict.js";
import { StoreComponent } from "./storeComponent.js";

export class StoreData {
    constructor() {
        this.component = new StoreComponent();
        this.init();
    }

    init() {
        this.storeIdGenerate();
        this.storeAddressGenerate();
        this.storeTypeGenerate();
        this.storeNameGenerate();
    }

    reset() {
        this.init();
    }

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
        this.storeType = this.component.storeTypeData.burgerBrand[Math.floor(Math.random() * 8)];
    }

    storeNameGenerate() {
        this.storeName = `${this.storeType} ${storeNameOfDistrict(this.storeAddressDistrict)}`;
    }
}