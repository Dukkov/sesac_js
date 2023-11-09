import { v4 as uuidv4} from "uuid";
import { OrderAndItemComponent } from "./orderAndItemComponent.js";
import _ from "lodash";

// OrderAndItemComponent를 이용해 랜덤한 orderId, itemId를 뽑아 저장하는 메소드들로 이루어진 클래스
export class OrderAndItemData {
    constructor() {
        this.component = new OrderAndItemComponent();
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

    // OrderAndItemComponent를 사용해 order.csv 파일에 존재하는 랜덤한 orderId를 추출하는 메소드
    orderIdExtract() {
        this.orderAndItemOrderId = this.component.orderDataArr[Math.floor(Math.random() * this.component.orderDataArr.length)];
    }

    // OrderAndItemComponent를 사용해 item.csv 파일에 존재하는 랜덤한 itemId를 추출하는 메소드
    itemIdExtract() {
        this.orderAndItemItemId = this.component.itemDataArr[Math.floor(Math.random() * this.component.itemDataArr.length)];
    }
}