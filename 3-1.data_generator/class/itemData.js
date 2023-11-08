import { v4 as uuidv4 } from "uuid";
import { ItemComponent } from "./itemComponent.js";


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

    itemInfoGenerate() {
        const itemInfoRandomKey = this.component.itemInfoKeys[Math.floor(Math.random() * this.component.itemInfoKeys.length)];
        this.itemName = this.component.itemInfoData[itemInfoRandomKey].name;
        this.itemType = this.component.itemInfoData[itemInfoRandomKey].type;
        this.itemUnitPrice = this.component.itemInfoData[itemInfoRandomKey].price;
    }
}