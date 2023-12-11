import { User } from "../utils/user.js";
import { db } from "../database/initDB.js";

const userList = new User();

export const userListRenderer = async (req, resp) => {
    try {
        await userList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }

    if (req.params.pageNum < 1 || req.params.pageNum > userList.paginator.getTotalPage()) {
        resp.status(404).json({ message: "404 Page Not Found" });
        return;
    }
    
    userList.paginator.setItemsPerPage(20);
    userList.paginator.setPageNum(req.params.pageNum);

    resp.render("user", { 
        currentPage: "users", // 프론트에서 처리
        userData: userList.paginator.getCurrentPage(),
        pageNum: req.params.pageNum,
        totalPage: userList.paginator.getTotalPage()
    });
};

export const userInfoRenderer = async (req, resp) => {
    const dataArr = [];
    try {
        const queries = [
            { sql:`SELECT Name, Gender, Age, Birthdate, Address 
                FROM "user" 
                WHERE Id=?;`,
            single: true },
            { sql:`SELECT o.Id AS OrderId, OrderAt, StoreId
                FROM "order" AS o
                JOIN "user" AS u 
                ON o.UserId = u.Id
                WHERE UserId = ?;`,
            single: false }
        ];

        for (const query of queries) { // 함수화, data 관련 폴더로
            const data = await new Promise((resolve, reject) => {
                const method = query.single ? "get" : "all";

                db[method](query.sql, req.params.userId, (err, row) => {
                    if (err)
                        reject(err);
                    else
                        resolve(row);
                });
            });
            dataArr.push(data);
        }
    } catch (err) {
        console.error(err.message);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }
    
    resp.render("userInfo", {
        userData: dataArr[0],
        orderData: dataArr[1]
    });
};