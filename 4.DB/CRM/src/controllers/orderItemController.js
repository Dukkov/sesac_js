import { OrderItem } from "../utils/orderItem.js";

export const orderItemListRenderer = async (req, resp) => {
    const orderItemList = new OrderItem();

    try {
        await orderItemList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
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