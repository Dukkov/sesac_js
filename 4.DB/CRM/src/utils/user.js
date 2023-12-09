import { db } from "../database/initDB.js";
import { Paginator } from "./paginator.js";

export class User {
    constructor() {
        this.paginator = new Paginator();
        this.initialized = false;
    }

    async init() {
        if (!this.initialized) {
            await this.userListGenerator();
            this.paginator.setItemList(this.userList);
            this.initialized = true;
        }
    }

    userListGenerator() {
        return new Promise((resolve, reject) => {
            db.all("SELECT Id, Name, Gender, Age, Birthdate FROM 'user'", (err, rows) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                this.userList = rows;
                resolve();
            });
        });
    }
}