import { Item } from "../utils/item.js";

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