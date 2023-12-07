import { db } from "../database/initDB.js"

export const userList = (req, resp) => {
    const pageNum = req.params.pageNum;
    const startIndex = (pageNum - 1) * 20;
    const endIndex = pageNum * 20;

    db.all("SELECT Id, Name, Gender, Age, Birthdate FROM 'user'", (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }

        resp.render("user", { currentPage: "users", userData: rows.slice(startIndex, endIndex) });
    });
};