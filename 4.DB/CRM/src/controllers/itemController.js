export const itemList = (req, resp) => {
    resp.render("item", { currentPage: "items" });
};