import sqlite3 from "sqlite3";

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
    db.run(`CREATE TABLE users(id INTEGER, name TEXT)`);
    db.run(`INSERT INTO users VALUES (?,?)`, [1, "user1"]);
    db.run(`INSERT INTO users VALUES (?,?)`, [2, "user2"]);
    db.all(`SELECT * FROM users`, (err, rows) => {  
        console.log(rows);
    });
});

db.close();