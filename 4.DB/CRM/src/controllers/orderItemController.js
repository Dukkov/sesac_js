import { OrderItem } from "../utils/orderItem.js";

const orderItemList = new OrderItem();
const initPromise = orderItemList.init();

export const orderItemListRenderer = async (req, resp) => {
    try {
        await initPromise;
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