import fs from "fs";

export function readCsv(path, callback) {
    fs.readFile(path, "utf8", (e, data) => {
        if (e)
            return callback(e, null);
        
        const rows = data.split("\n");
        const result = rows.map((row) => row.split(","));
        callback(null, result);
    });
}

export function writeCsv(path, data, callback) {
    fs.writeFile(path, data, "utf8", (e) => {
        if (e)
            return callback(e);
        callback(null);
    })
}