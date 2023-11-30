import express from "express";
import sqlite3 from "sqlite3";
import fs from "fs";

const app = express();
const port = 3000;
const dbFile = "mydb1.db";

const db = new sqlite3.Database(dbFile);

const initDatabase = () => {
    return new Promise((resolve, reject) => {
        const sql = fs.readFileSync("./init_database.sql", "utf8");
        db.exec(sql, (err) => {
        if (err)
            reject(err);
        else {
            console.log("DB init done");
            resolve();
        }
        });
    });
};

initDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Port ${port} ready`);
        });
    })
    .catch((err) => console.error(err));

app.get("/", (req, resp) => {
    resp.send("Hello World");
});

app.get("/:table", (req, resp) => {
    const dbTable = req.params.table;
    const query = `SELECT * FROM ${dbTable}`;

    db.all(query, (err, rows) => {
        resp.json(rows);
    });
});

app.get("/:table/:id", (req, resp) => {
    const dbTable = req.params.table;
    const rowId = req.params.id;
    const query = `SELECT * FROM ${dbTable} WHERE id=${rowId}`

    db.each(query, (err, row) => {
        resp.json(row);
    });
});