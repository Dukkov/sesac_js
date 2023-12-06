import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();
const csvFiles = [
    path.join(__dirname, "src", "data", "item.csv"),
    path.join(__dirname, "src", "data", "order.csv"),
    path.join(__dirname, "src", "data", "orderItem.csv"),
    path.join(__dirname, "src", "data", "store.csv"),
    path.join(__dirname, "src", "data", "user.csv")
];
export const db = new sqlite3.Database(path.join(__dirname, "src", "data", "crmDB.db"));

export const initDatabase = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            for (const csvFile of csvFiles) {
                const tableName = csvFile.split("/").pop().replace(".csv", "");
                // console.log(tableName);
                const csvData = fs.readFileSync(csvFile, "utf-8");
                // console.log(csvData);
    
                db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (${csvData.split("\n")[0]})`, (err) => {
                    if (err) {
                        console.error(err)
                        reject();
                    }
                    else
                        console.log(`Table ${tableName} initiating done`);
                });
            }
            resolve();
        });
    });
};