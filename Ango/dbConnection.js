import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.query(`
    CREATE TABLE Station (
        stationName VARCHAR(10) PRIMARY KEY,
        toPreviousStation INT(2),
        toNextStation INT(2),
        stationInfo TEXT,
        targetInfo TEXT
    );`, function (err, results) {
    console.log(results);
});

connection.end()