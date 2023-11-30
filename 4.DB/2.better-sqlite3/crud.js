import sqlite from "better-sqlite3";

const db = sqlite(":memory");

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT
)`);

const allUsers = db.prepare("SELECT * FROM users").all();
console.log(allUsers);

const newUser = {
    username: "dukov", email: "dukov@sesac.com"
};

const insert = db.prepare("INSERT INTO users (username, email) VALUES (?, ?)");
const insertResult = insert.run(newUser.username, newUser.email);
console.log(insertResult.lastInsertRowid);

const userId = 20;
const user = db.prepare("SELECT * FROM users WHERE id = ?").get(userId);
console.log(`${userId}: ${user?.username}`);

const updateUser = {
    id: 3, username: "potato", email: "crisp@sesac.com"
};
const update = db.prepare("UPDATE users SET username=?, email=? WHERE id=?");
update.run(updateUser.username, updateUser.email, updateUser.id);

const deleteUser = { id: 1 };
const deleteQuery = db.prepare("DELETE FROM users WHERE id=?");
deleteQuery.run(deleteUser.id);

db.close();