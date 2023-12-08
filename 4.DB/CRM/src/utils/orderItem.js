import { db } from "../database/initDB.js";
import { Paginator } from "./paginator.js";

export class OrderItem {
    constructor() {
        this.paginator = new Paginator();
    }

    async init() {
        await this.orderItemListGenerator();
        this.paginator.setItemList(this.orderItemList);
    }

    orderItemListGenerator() {
        return new Promise((resolve, reject) => {
            db.all("SELECT Id, OrderId, ItemId FROM 'orderItem'", (err, rows) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                this.orderItemList = rows;
                resolve();
            });
        });
    }
}