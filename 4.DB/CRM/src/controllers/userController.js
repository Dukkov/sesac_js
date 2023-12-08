import { User } from "../utils/user.js";

export const userListRenderer = async (req, resp) => {
    const userList = new User();

    try {
        await userList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }
    userList.paginator.setItemsPerPage(20);
    userList.paginator.setPageNum(req.params.pageNum);

    resp.render("user", { 
        currentPage: "users", 
        userData: userList.paginator.getCurrentPage(),
        pageNum: req.params.pageNum,
        totalPage: userList.paginator.getTotalPage()
    });
};