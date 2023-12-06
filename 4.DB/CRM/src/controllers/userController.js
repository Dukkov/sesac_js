export const userList = (req, resp) => {
    resp.render("user", { currentPage: "users" });
};