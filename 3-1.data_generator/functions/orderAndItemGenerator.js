import fs from "fs";
import path from "path";
import { OrderAndItemData } from "../class/orderAndItemData.js";

// orderitem.csv를 생성하는 함수
export async function orderAndItemGenerator(num) {
    const orderAndItemInstance = new OrderAndItemData();
    const orderAndItemDataArr = [];

    // orderAndItem 정보를 생성하는 OrderAndItemData 클래스의 인스턴스를 배열에 복사하고 인스턴스를 reset하는 과정을 num번 반복함
    for (let i = 0; i < num; i++) {
        orderAndItemDataArr.push(orderAndItemInstance.getOrderAndItemData());
        orderAndItemInstance.reset();
    }
    const orderAndItemDataCsv = "\n" + orderAndItemDataArr.map(orderAndItem => `${orderAndItem.orderAndItemId},${orderAndItem.orderAndItemOrderId},${orderAndItem.orderAndItemItemId}`).join("\n");
    const orderAndItemDataCsvHeader = "Id,OrderId,ItemId";
    fs.writeFileSync(path.join("./csv", "orderitem.csv"), orderAndItemDataCsvHeader, "utf8");
    fs.appendFileSync(path.join("./csv", "orderitem.csv"), orderAndItemDataCsv, "utf8");
}