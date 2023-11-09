import { v4 as uuidv4 } from "uuid";
import { dateOfMonth } from "../functions/dateOfMonth.js";
import { dateTo2Digit } from "../functions/dateTo2Digit.js";
import { OrderComponent } from "./orderComponent.js";

// OrderComponent를 이용해 랜덤한 storeId, userId를 뽑아 저장하고, 랜덤한 일자 및 시각을 생성해 저장하는 메소드들로 이루어진 클래스
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

    // 날짜 데이터를 받아서 2자리수 데이터를 반환하는 dateTo2Digit 함수를 사용해 랜덤한 주문일자를 생성하는 메소드
    orderTimeGenerate() {
        const orderTimeYear = Math.floor(Math.random() * 4) + 2020;
        const orderTimeMonth = dateTo2Digit(Math.floor(Math.random() * 12) + 1);
        const orderTimeDay = dateTo2Digit(Math.floor(Math.random() * dateOfMonth(orderTimeMonth)) + 1);
        const orderTimeHour = dateTo2Digit(Math.floor(Math.random() * 24));
        const orderTimeMin = dateTo2Digit(Math.floor(Math.random() * 60));
        const orderTimeSec = dateTo2Digit(Math.floor(Math.random() * 60));
        this.orderTime = `${orderTimeYear}-${orderTimeMonth}-${orderTimeDay} ${orderTimeHour}:${orderTimeMin}:${orderTimeSec}`
    }

    // OrderComponent를 사용해 store.csv 파일에 존재하는 랜덤한 storeId를 추출하는 메소드
    orderStoreIdExtract() {
        this.storeId = this.component.storeIdArr[Math.floor(Math.random() * this.component.storeIdArr.length)];
    }
    
    // OrderComponent를 사용해 user.csv 파일에 존재하는 랜덤한 userId를 추출하는 메소드
    orderUserIdExtract() {
        this.userId = this.component.userIdArr[Math.floor(Math.random() * this.component.userIdArr.length)];
    }
}