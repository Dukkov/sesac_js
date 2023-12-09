import { db } from "../database/initDB.js";
import { Paginator } from "./paginator.js";

export class OrderItem {
    constructor() {
        this.paginator = new Paginator();
        this.initialized = false;
    }

    async init() {
        if (!this.initialized) {
            await this.orderItemListGenerator();
            this.paginator.setItemList(this.orderItemList);
            this.initialized = true;
        }
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