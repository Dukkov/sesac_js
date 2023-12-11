import { Store } from "../utils/store.js";
import { db } from "../database/initDB.js";

const storeList = new Store();

export const storeListRenderer = async (req, resp) => {
    try {
        await storeList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }

    if (req.params.pageNum < 1 || req.params.pageNum > storeList.paginator.getTotalPage()) {
        resp.status(404).json({ message: "404 Page Not Found" });
        return;
    }

    storeList.paginator.setItemsPerPage(20);
    storeList.paginator.setPageNum(req.params.pageNum);

    resp.render("store", {
        currentPage: "stores",
        storeData: storeList.paginator.getCurrentPage(),
        pageNum: req.params.pageNum,
        totalPage: storeList.paginator.getTotalPage()
    });
};

export const storeInfoRenderer = async (req, resp) => {
    const dataArr = [];
    try {
        const queries = [{ 
            sql:`SELECT Name, Type, Address 
                FROM "store" 
                WHERE Id=?;`,
            single: true }, 
            { 
            sql:`SELECT strftime('%Y-%m', o.OrderAt) AS Month, SUM(i.UnitPrice) AS Revenue, COUNT(*) AS Count
                FROM 'order' AS o
                JOIN 'orderItem' AS oi
                ON o.Id = oi.OrderId
                JOIN 'item' AS i
                ON i.Id = oi.ItemId
                WHERE o.StoreId=?
                GROUP BY Month;`,
            single: false },
            {
            sql:`SELECT u.Id AS UserId, u.Name AS Name, COUNT(*) AS Frequency
                FROM 'user' AS u
                JOIN 'order' AS o
                ON u.Id = o.UserId
                WHERE o.StoreId=?
                GROUP BY u.Name
                ORDER BY Frequency DESC
                LIMIT 10;`,
            single: false }
        ];

        for (const query of queries) { // 함수화, data 관련 폴더로
            const data = await new Promise((resolve, reject) => {
                const method = query.single ? "get" : "all";

                db[method](query.sql, req.params.storeId, (err, row) => {
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
    
    resp.render("storeInfo", {
        storeData: dataArr[0],
        revenueData: dataArr[1],
        regularData: dataArr[2]
    });
};