import { Item } from "../utils/item.js";
import { db } from "../database/initDB.js";

const itemList = new Item();

export const itemListRenderer = async (req, resp) => {
    try {
        await itemList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }

    if (req.params.pageNum < 1 || req.params.pageNum > itemList.paginator.getTotalPage()) {
        resp.status(404).json({ message: "404 Page Not Found" });
        return;
    }
    
    itemList.paginator.setItemsPerPage(20);
    itemList.paginator.setPageNum(req.params.pageNum);

    resp.render("item", {
        currentPage: "items", 
        itemData: itemList.paginator.getCurrentPage(),
        pageNum: req.params.pageNum,
        totalPage: itemList.paginator.getTotalPage()
    });
};

export const itemInfoRenderer = async (req, resp) => {
    const dataArr = [];
    try {
        const queries = [
            { sql:`SELECT Name, UnitPrice
                FROM "item" 
                WHERE Id=?;`,
            single: true },
            { sql:`SELECT strftime("%Y-%m", o.OrderAt) AS Month, COUNT(*) * i.UnitPrice AS Revenue, COUNT(*) AS ItemCnt
                FROM "order" AS o
                JOIN "orderItem" AS oi
                ON o.Id = oi.OrderId
                JOIN "item" AS i
                ON i.Id = oi.ItemId
                WHERE i.Id=?
                GROUP BY Month;`,
            single: false }
        ];

        for (const query of queries) {
            const data = await new Promise((resolve, reject) => {
                const method = query.single? "get" : "all";

                db[method](query.sql, req.params.itemId, (err, row) => {
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
    
    resp.render("itemInfo", {
        itemData: dataArr[0],
        revenueData: dataArr[1]
    });
};