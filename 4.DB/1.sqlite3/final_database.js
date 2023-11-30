import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("mydb3.db");

export const createTable = () => {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            message TEXT,
            email TEXT
        )`, (err) => {
            if (err)
                reject(err);
            else
                resolve();
            }
        );
    });
};

export const insertUser = (newUser) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO users (username, email) VALUES (?, ?)`,
            [newUser.username, newUser.email], (err) => {
            if (err) {
                console.error("insert error");
                reject(err);
            }
            else
                resolve();
            }
        );
    });
};

export const updateUser = (newUser) => {
    return new Promise((resolve, reject) => {
        db.run("UPDATE users SET username=?, email=? WHERE id=?",
            [newUser.username, newUser.email, newUser.id],
            (err) => {
                if (err) {
                    console.error("update error")
                    reject(err);
                }
                else
                    resolve();
            }
        );
    });
};

export const deleteUser = (delUser) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM users WHERE id=?",
            [delUser.id], (err) => {
                if (err) {
                    console.error("delete error")
                    reject(err);
                }
                else
                    resolve();
            }
        );
    });
};

export const selectUser = () => {
    return new Promise((resolve, reject) => {
        db.each("SELECT * FROM users", (err, row) => {
            if (err) {
                console.error("select error")
                reject(err);
            }
            else {
                console.log(row);
                resolve();
            }
        });
    });
};