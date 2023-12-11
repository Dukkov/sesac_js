import { db } from "../database/initDB.js";
import { OrderItem } from "../utils/orderItem.js";

const orderItemList = new OrderItem();

export const orderItemListRenderer = async (req, resp) => {
    try {
        await orderItemList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }

    if (req.params.pageNum < 1 || req.params.pageNum > orderItemList.paginator.getTotalPage()) {
        resp.status(404).json({ message: "404 Page Not Found" });
        return;
    }

    orderItemList.paginator.setItemsPerPage(20);
    orderItemList.paginator.setPageNum(req.params.pageNum);

    resp.render("orderItem", {
        currentPage: "order-items", 
        orderItemData: orderItemList.paginator.getCurrentPage(),
        pageNum: req.params.pageNum,
        totalPage: orderItemList.paginator.getTotalPage()
    });
};

export const orderItemInfoRenderer = async (req, resp) => {
    try {
        const sql = `
        SELECT oi.Id AS Id, OrderId, ItemId, i.Name AS ItemName
        FROM "orderitem" AS oi
        JOIN "item" AS i
        ON oi.ItemId = i.Id
        WHERE oi.OrderId =?;`;
        
        const orderItemData = await new Promise((resolve, reject) => {
            db.all(sql, req.params.orderItemId, (err, row) => {
                if (err)
                    reject(err);
                else
                    resolve(row);
            });
        });

        resp.render("orderItemInfo", {
            orderItemData: orderItemData
        });
    } catch (err) {
        console.error(err.message);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }
};