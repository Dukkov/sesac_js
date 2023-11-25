import {v4 as uuidv4} from "uuid";
import { districtOfCity } from "../functions/districtOfCity.js";
import { storeNameOfDistrict } from "../functions/storeNameOfDistrict.js";
import { StoreComponent } from "./storeComponent.js";

// StoreComponent를 이용해 랜덤한 storeType을 생성하고, storeAddressGenerate 메소드에서 생성된 주소를 기반으로 
// storeName을 생성하는 메소드들로 이루어진 클래스
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

    // 입력된 도시의 지역구 중 하나를 랜덤하게 반환하는 districtOfCity 함수를 사용해 서울 어딘가의 주소를 생성하는 메소드
    storeAddressGenerate() {
        this.storeAddressCity = "서울";
        this.storeAddressDistrict = districtOfCity(this.storeAddressCity);
        this.storeAddressRoad = (Math.floor(Math.random() * 100) + 1) + (Math.random() < 0.5 ? "길" : "로");
        this.storeAddressNum = Math.floor(Math.random() * 100) + 1;
        this.storeAddress = `${this.storeAddressCity} ${this.storeAddressDistrict} ${this.storeAddressRoad} ${this.storeAddressNum}`;
    }

    // StoreComponent를 이용해 랜덤한 버거 브랜드를 생성하는 메소드
    storeTypeGenerate() {
        this.storeType = this.component.storeTypeData.burgerBrand[Math.floor(Math.random() * 8)];
    }

    // 입력된 지역구에 속하는 점포명 중 하나를 랜덤하게 반환하는 storeNameOfDistrict 함수를 사용해 가게이름을 생성하는 메소드
    storeNameGenerate() {
        this.storeName = `${this.storeType} ${storeNameOfDistrict(this.storeAddressDistrict)}`;
    }

    // StoreData 인스턴스 내부 변수값을 객체로 반환하는 메소드
    getStoreData() {
        return {
            storeId: this.storeId,
            storeName: this.storeName,
            storeType: this.storeType,
            storeAddress: this.storeAddress
        };
    }
}