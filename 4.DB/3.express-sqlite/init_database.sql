CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
);

INSERT OR IGNORE INTO users(id, username, password) VALUES
    (1, "user1", "password1"),
    (2, "user2", "password2");

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    productName TEXT,
    price INTEGER
);

INSERT OR IGNORE INTO products VALUES
    (1, "product 1", 2000),
    (2, "product 2", 3000),
    (3, "product 3", 1500);

CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    genre TEXT
);

INSERT OR IGNORE INTO books VALUES
    (1, "book 1", "author 1", "Fiction"),
    (2, "book 2", "author 2", "Non-fiction"),
    (3, "book 3", "author 3", "Mystery");