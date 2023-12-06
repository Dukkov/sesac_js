export const orderList = (req, resp) => {
    resp.render("order", { currentPage: "orders" });
};