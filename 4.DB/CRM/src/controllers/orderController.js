import { Order } from "../utils/order.js";

export const orderListRenderer = async (req, resp) => {
    const orderList = new Order();

    try {
        await orderList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
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