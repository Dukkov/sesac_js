import {v4 as uuidv4} from "uuid";
import { dateOfMonth } from "../functions/dateOfMonth.js";
import { dateTo2Digit } from "../functions/dateTo2Digit.js";
import { OrderComponent } from "./orderComponent.js";

export class OrderData {
    constructor() {
        this.component = new OrderComponent();
        this.init();
    }

    init() {
        this.orderIdGenerate();
        this.orderTimeGenerate();
        this.orderStoreIdExtract();
        this.orderUserIdExtract();
    }

    reset() {
        this.init();
    }

    orderIdGenerate() {
        this.orderId = uuidv4();
    }

    orderTimeGenerate() {
        const orderTimeYear = Math.floor(Math.random() * 4) + 2020;
        const orderTimeMonth = dateTo2Digit(Math.floor(Math.random() * 12) + 1);
        const orderTimeDay = dateTo2Digit(Math.floor(Math.random() * dateOfMonth(orderTimeMonth)) + 1);
        const orderTimeHour = dateTo2Digit(Math.floor(Math.random() * 24));
        const orderTimeMin = dateTo2Digit(Math.floor(Math.random() * 60));
        const orderTimeSec = dateTo2Digit(Math.floor(Math.random() * 60));
        this.orderTime = `${orderTimeYear}-${orderTimeMonth}-${orderTimeDay} ${orderTimeHour}:${orderTimeMin}:${orderTimeSec}`
    }

    orderStoreIdExtract() {
        this.storeId = this.component.storeIdArr[Math.floor(Math.random() * this.component.storeIdArr.length)];
    }

    orderUserIdExtract() {
        this.userId = this.component.userIdArr[Math.floor(Math.random() * this.component.userIdArr.length)];
    }
}