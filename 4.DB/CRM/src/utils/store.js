import { db } from "../database/initDB.js";
import { Paginator } from "./paginator.js";

export class Store {
    constructor() {
        this.paginator = new Paginator();
    }

    async init() {
        await this.storeListGenerator();
        this.paginator.setItemList(this.storeList);
    }

    storeListGenerator() {
        return new Promise((resolve, reject) => {
            db.all("SELECT Id, Type, Name, Address FROM 'store'", (err, rows) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                this.storeList = rows;
                resolve();
            });
        });
    }
}