import sqlite3 from "sqlite3";

const db = new sqlite3.Database("mydb1.db");

db.run(`CREATE TABLE IF NOT EXISTS greetings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT)`);

const msg1 = ["Hello, World3"];
db.run(`INSERT INTO greetings (message) VALUES (?)`, msg1,
    (err) => {
        if (err) {
            console.error("error")
            return;
        }
        console.log("success");
    }
);

db.each("SELECT * FROM greetings", (err, row) => {
    if (err) {
            console.error("error")
            return;
    }
    console.log(row.message);
});

db.close();