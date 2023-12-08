import { Store } from "../utils/store.js";

export const storeListRenderer = async (req, resp) => {
    const storeList = new Store();

    try {
        await storeList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
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