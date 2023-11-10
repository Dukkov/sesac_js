import fs from "fs";
import path from "path";
import { OrderData } from "../class/orderData.js";

// order.csv를 생성하는 함수
export async function orderGenerator(num) {
    const orderInstance = new OrderData();
    const orderDataArr = [];

    // order 정보를 생성하는 OrderData 클래스의 인스턴스를 배열에 복사하고 인스턴스를 reset하는 과정을 num번 반복함
    for (let i = 0; i < num; i++) {
        orderDataArr.push(orderInstance.getOrderData());
        orderInstance.reset();
    }

    const orderDataCsv = orderDataArr.map(order => `${order.orderId},${order.orderTime},${order.storeId},${order.userId}`).join("\n");
    const orderDataCsvHeader = "Id,OrderAt,StoreId,UserId\n";
    fs.writeFileSync(path.join("./csv", "order.csv"), orderDataCsvHeader, "utf8");
    fs.appendFileSync(path.join("./csv", "order.csv"), orderDataCsv, "utf8");
}