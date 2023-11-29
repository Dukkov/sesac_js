import sqlite3 from "sqlite3";

const db = new sqlite3.Database("mydb2.db");

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    message TEXT,
    email TEXT
)`, (err) => {
    if (err) {
        console.error("create error")
        return;
    }
    const newUser = { username: "dukov", email: "dukov@sesac.com" };

    db.run(`INSERT INTO users (username, email) VALUES (?, ?)`,
    [newUser.username, newUser.email], (err) => {
        if (err) {
            console.error("insert error");
            return;
        }
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
                    return;
                }
                const delUser = {
                    id: 3
                };
                db.run("DELETE FROM users WHERE id=?",
                    [delUser.id], (err) => {
                        if (err) {
                            console.error("delete error")
                            return;
                        }
                        db.each("SELECT * FROM users", (err, row) => {
                            if (err) {
                                    console.error("select error")
                                    return;
                            }
                            console.log(row);
                        }
                        );
                    }
                );
            }
        );
    }
    );
    }
);

db.close();