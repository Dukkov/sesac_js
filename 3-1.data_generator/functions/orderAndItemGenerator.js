import fs from "fs";
import path from "path";
import { OrderAndItemData } from "../class/orderAndItemData.js";
import _ from "lodash";

// orderitem.csv를 생성하는 함수
export function orderAndItemGenerator(num) {
    const orderAndItemInstance = new OrderAndItemData();
    const orderAndItemDataArr = [];
    const orderAndItemDataCsvHeader = "Id,OrderId,ItemId";
    fs.writeFileSync(path.join("./csv", "orderitem.csv"), orderAndItemDataCsvHeader, "utf8");

    // orderAndItem 정보를 생성하는 OrderAndItemData 클래스의 인스턴스를 배열에 복사하고 인스턴스를 reset하는 과정을 num번 반복함
    // 배열에 50000개의 객체를 저장하려고 하면 힙메모리 초과 에러가 발생해서 배열길이가 10000이 될때마다 csv파일에 append하고 배열을 비움
    for (let i = 0; i < num; i++) {
        orderAndItemDataArr.push(_.cloneDeep(orderAndItemInstance));
        orderAndItemInstance.reset();
        if (orderAndItemDataArr.length >= 10000) {
            const orderAndItemDataCsv = "\n" + orderAndItemDataArr.map(orderAndItem => `${orderAndItem.orderAndItemId},${orderAndItem.orderAndItemOrderId},${orderAndItem.orderAndItemItemId}`).join("\n");
            fs.appendFileSync(path.join("./csv", "orderitem.csv"), orderAndItemDataCsv, "utf8");
            orderAndItemDataArr.length = 0;
        }
    }

    // num이 10000으로 나누어 떨어지지 않는 경우 배열에 남아있는 내용을 csv파일에 append함
    if (orderAndItemDataArr.length != 0) {
        const orderAndItemDataCsv = "\n" + orderAndItemDataArr.map(orderAndItem => `${orderAndItem.orderAndItemId},${orderAndItem.orderAndItemOrderId},${orderAndItem.orderAndItemItemId}`).join("\n");
        fs.appendFileSync(path.join("./csv", "orderitem.csv"), orderAndItemDataCsv, "utf8");
    }
}