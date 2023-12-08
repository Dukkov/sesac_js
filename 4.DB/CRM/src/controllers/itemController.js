import { Item } from "../utils/item.js";

export const itemListRenderer = async (req, resp) => {
    const itemList = new Item();

    try {
        await itemList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
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