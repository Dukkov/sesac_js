import { db } from "../database/initDB.js";
import { Paginator } from "./paginator.js";

export class Item {
    constructor() {
        this.paginator = new Paginator();
    }

    async init() {
        await this.itemListGenerator();
        this.paginator.setItemList(this.itemList);
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