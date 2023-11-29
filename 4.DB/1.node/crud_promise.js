import sqlite3 from "sqlite3";

const db = new sqlite3.Database("mydb3.db");

const createTable = () => {
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

const insertUser = () => {
    return new Promise((resolve, reject) => {
        const newUser = { username: "dukov", email: "dukov@sesac.com" };

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

const updateUser = () => {
    return new Promise((resolve, reject) => {
        const updateUser = {
            id: 1,
            username: "sesac",
            email: "sesac@sesac.com"
        };

        db.run("UPDATE users SET username=?, email=? WHERE id=?",
            [updateUser.username, updateUser.email, updateUser.id],
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

const deleteUser = () => {
    return new Promise((resolve, reject) => {
        const delUser = {
            id: 3
        };

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

const selectUser = () => {
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

createTable()
    .then(() => insertUser())
    .then(() => updateUser())
    .then(() => deleteUser())
    .then(() => selectUser())
    .then(() => db.close())
    .catch((err) => console.error(err))