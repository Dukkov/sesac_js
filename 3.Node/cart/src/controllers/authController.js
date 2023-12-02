import { users } from "../data/user.js";

export const userInfo = (req, resp) => {
    const user = req.session.user;

    if (user)
        resp.json({ username: user.username });
    else
        resp.json({ message: "There's no user" });
}

export const logout = (req, resp) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("error", err);
            resp.status(500).json({ message: "로그아웃 실패" });
        }
        else
            resp.json({ message: "로그아웃 성공" });
    });
}

export const login = (req, resp) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        req.session.user = user;
        resp.json({ message: "Login Success. Welcome!" });
    }
    else {
        resp.status(401).json({ message: "Login failed. Try again" });
    }
}