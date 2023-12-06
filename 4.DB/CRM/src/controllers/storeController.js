export const storeList = (req, resp) => {
    resp.render("store", { currentPage: "stores" });
};