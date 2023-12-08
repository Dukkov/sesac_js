import { Order } from "../utils/order.js";

const orderList = new Order();
const initPromise = orderList.init();

export const orderListRenderer = async (req, resp) => {

    try {
        await initPromise;
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