import { Store } from "../utils/store.js";

const storeList = new Store();

export const storeListRenderer = async (req, resp) => {
    try {
        await storeList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }

    if (req.params.pageNum < 1 || req.params.pageNum > storeList.paginator.getTotalPage()) {
        resp.status(404).json({ message: "404 Page Not Found" });
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

export const storeInfoRenderer = (req, resp) => {
    resp.render("storeInfo");
};