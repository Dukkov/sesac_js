import { User } from "../utils/user.js";

const userList = new User();

export const userListRenderer = async (req, resp) => {
    try {
        await userList.init();
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Internal server error" });
        return;
    }

    if (req.params.pageNum < 1 || req.params.pageNum > userList.paginator.getTotalPage()) {
        resp.status(404).json({ message: "404 Page Not Found" });
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

export const userInfoRenderer = (req, resp) => {
    resp.render("userInfo", {
        
    });
};