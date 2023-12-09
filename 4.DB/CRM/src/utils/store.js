import { db } from "../database/initDB.js";
import { Paginator } from "./paginator.js";

export class Store {
    constructor() {
        this.paginator = new Paginator();
        this.initialized = false;
    }

    async init() {
        if (!this.initialized) {
            await this.storeListGenerator();
            this.paginator.setItemList(this.storeList);
            this.initialized = true;
        }
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