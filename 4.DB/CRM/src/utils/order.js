import { db } from "../database/initDB.js";
import { Paginator } from "./paginator.js";

export class Order {
    constructor() {
        this.paginator = new Paginator();
        this.initialized = false;
    }

    async init() {
        if (!this.initialized) {
            await this.orderListGenerator();
            this.paginator.setItemList(this.orderList);
            this.initialized = true;
        }
    }

    orderListGenerator() {
        return new Promise((resolve, reject) => {
            db.all("SELECT Id, OrderAt, StoreId, UserId FROM 'order'", (err, rows) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                this.orderList = rows;
                resolve();
            });
        });
    }
}