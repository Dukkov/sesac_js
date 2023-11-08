import { v4 as uuidv4} from "uuid";
import { OrderandItemComponent } from "./orderAndItemComponent.js";
import _ from "lodash";

export class OrderAndItemData {
    constructor() {
        this.component = new OrderandItemComponent();
        this.init();
    }

    init() {
        this.orderAndItemIdGenerate();
        this.orderIdExtract();
        this.itemIdExtract();
    }

    reset() {
        this.init();
    }

    orderAndItemIdGenerate() {
        this.orderAndItemId = uuidv4();
    }
    orderIdExtract() {
        this.orderAndItemOrderId = this.component.orderDataArr[Math.floor(Math.random() * this.component.orderDataArr.length)];
    }
    itemIdExtract() {
        this.orderAndItemItemId = this.component.itemDataArr[Math.floor(Math.random() * this.component.itemDataArr.length)];
    }
}