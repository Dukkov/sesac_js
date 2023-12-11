import { Order } from "../utils/order.js";
import { db } from "../database/initDB.js";

const orderList = new Order();

export const orderListRenderer = async (req, resp) => {
    try {
        await orderList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }
    
    if (req.params.pageNum < 1 || req.params.pageNum > orderList.paginator.getTotalPage()) {
        resp.status(404).json({ message: "404 Page Not Found" });
        return;
    }

    orderList.paginator.setItemsPerPage(20);
    orderList.paginator.setPageNum(req.params.pageNum);

    resp.render("order", {
        currentPage: "orders", 
        orderData: orderList.paginator.getCurrentPage(),
        pageNum: req.params.pageNum,
        totalPage: orderList.paginator.getTotalPage()
    });
};

export const orderInfoRenderer = async (req, resp) => {
    try {
        const sql = `
        SELECT Id, OrderAt, StoreId, UserId
        FROM "order"
        WHERE Id =?;`;
        
        const orderData = await new Promise((resolve, reject) => {
            db.get(sql, req.params.orderId, (err, row) => {
                if (err)
                    reject(err);
                else
                    resolve(row);
            });
        });

        resp.render("orderInfo", {
            orderData: orderData
        });
    } catch (err) {
        console.error(err.message);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }
};