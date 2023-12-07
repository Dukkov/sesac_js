import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs";
import csv from "csv-parser";


const __dirname = path.resolve();
const csvFiles = [
    path.join(__dirname, "src", "data", "item.csv"),
    path.join(__dirname, "src", "data", "order.csv"),
    path.join(__dirname, "src", "data", "orderItem.csv"),
    path.join(__dirname, "src", "data", "store.csv"),
    path.join(__dirname, "src", "data", "user.csv")
];
export const db = new sqlite3.Database(path.join(__dirname, "src", "data", "crmDB.db"));

const createTable = (tableName, csvHeader) => {
    return new Promise((resolve, reject) => {
        const headers = csvHeader.split(",").map((header) => {
            if (header === "UnitPrice" || header === "Age")
                return (`${header} INTEGER`);
            else
                return (`${header} TEXT`);
        });

        db.run(`CREATE TABLE IF NOT EXISTS [${tableName}] (${headers.join(", ")})`, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            console.log(`Table ${tableName} created`);
            resolve();
        });
    });
};

const checkTable = (tableName) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT COUNT(*) AS count FROM [${tableName}]`, (err, row) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            resolve(row.count);
        });
    });
};

const insertTable = (tableName, csvFile) => {
    return new Promise((resolve, reject) => {
        const rows = [];
        fs.createReadStream(csvFile)
            .pipe(csv())
            .on("data", (row) => {
                rows.push(Object.values(row));
            })
            .on("end", () => {
                db.serialize(() => {
                    db.run("BEGIN TRANSACTION;");
                    const sql = db.prepare(`INSERT INTO [${tableName}] VALUES (${new Array(rows[0].length).fill("?").join(", ")})`);
                    rows.forEach((row) => {
                        sql.run(row);
                    });
                    sql.finalize();
                    db.run("COMMIT;", (err) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            console.log(`Table ${tableName} initiating done`);
                            resolve();
                        }
                    });
                });
            });
    });
};

export const initDatabase = async () => {
    const tasks = csvFiles.map(async (csvFile) => {
        const tableName = csvFile.split("/").pop().replace(".csv", "");
        const csvHeader = fs.readFileSync(csvFile, "utf-8").split("\n")[0];

        try {
            await createTable(tableName, csvHeader);
            const tableExist = await checkTable(tableName);

            if (tableExist)
                console.log(`Table ${tableName} already initiated`);
            else
                await insertTable(tableName, csvFile);
        } catch (err) {
            console.error(err);
        }
    });
    await Promise.all(tasks);
};