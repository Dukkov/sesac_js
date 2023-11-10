import { v4 as uuidv4 } from "uuid";
import { ItemComponent } from "./itemComponent.js";

// ItemComponent를 이용해 랜덤한 item을 뽑아 저장하는 메소드로 이루어진 클래스
export class ItemData {
    constructor() {
        this.component = new ItemComponent();
        this.init();
    }

    init() {
        this.itemIdGenerate();
        this.itemInfoGenerate();
    }

    reset() {
        this.init();
    }

    itemIdGenerate() {
        this.itemId = uuidv4();
    }

    // ItemComponent에서 랜덤한 item 키 값을 가져와서 item을 생성하는 메소드
    itemInfoGenerate() {
        const itemInfoRandomKey = this.component.itemInfoKeys[Math.floor(Math.random() * this.component.itemInfoKeys.length)];
        this.itemName = this.component.itemInfoData[itemInfoRandomKey].name;
        this.itemType = this.component.itemInfoData[itemInfoRandomKey].type;
        this.itemUnitPrice = this.component.itemInfoData[itemInfoRandomKey].price;
    }

    // ItemData 인스턴스 내부 변수값을 객체로 반환하는 메소드
    getItemData() {
        return {
            itemId: this.itemId,
            itemName: this.itemName,
            itemType: this.itemType,
            itemUnitPrice: this.itemUnitPrice
        };
    }
}