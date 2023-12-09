import { db } from "../database/initDB.js";
import { Paginator } from "./paginator.js";

export class Item {
    constructor() {
        this.paginator = new Paginator();
        this.initialized = false;
    }

    async init() {
        if (!this.initialized) {
            await this.itemListGenerator();
            this.paginator.setItemList(this.itemList);
            this.initialized = true;
        }
    }

    itemListGenerator() {
        return new Promise((resolve, reject) => {
            db.all("SELECT Id, Type, Name, UnitPrice FROM 'item'", (err, rows) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                this.itemList = rows;
                resolve();
            });
        });
    }
}