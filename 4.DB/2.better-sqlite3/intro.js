import sqlite from "better-sqlite3";

const db = sqlite("mydb1.db");

db.exec(`CREATE TABLE IF NOT EXISTS greetings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
)`);

const msg1 = ["Hello, World3"];
const insert = db.prepare(`INSERT INTO greetings (message) VALUES (?)`);
const result = insert.run(msg1);
console.log(result.lastInsertRowid);

const read = db.prepare("SELECT * FROM greetings");
const greetings = read.all();
greetings.forEach((row) => {
    console.log(row.message);
});

db.close();