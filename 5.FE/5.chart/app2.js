import express from "express";
import sqlite3 from "sqlite3";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/chart-data", (req, resp) => {
    const db = new sqlite3.Database(path.join(__dirname, "crmDB.db"));
    const sql = `
    SELECT strftime("%Y-%m", o.OrderAt) AS Month, COUNT(*) * i.UnitPrice AS Revenue
    FROM "order" AS o
    JOIN "orderItem" AS oi
    ON o.Id = oi.OrderId
    JOIN "item" AS i
    ON i.Id = oi.ItemId
    GROUP BY Month;`;

    db.all(sql, (err, rows) => {
        if (err) {
            console.error("sql error");
            return;
        }
        else {
            const months = rows.map(row => row.Month)
            const revenues = rows.map(row => row.Revenue)
            resp.json({ month: months, revenue: revenues});
        }
    });

    db.close();
});

app.listen(port, () => {
    console.log(`Port ${port} ready`);
});