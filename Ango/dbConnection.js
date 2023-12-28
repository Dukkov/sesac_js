import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.query(`SELECT * FROM station;`, (err, results) => {
    console.log(results);
});

connection.end()