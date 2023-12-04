import { users } from "../data/user.js";

export const userInfo = (req, resp) => {
    const user = req.session.user;

    if (user)
        resp.json({ username: user.username });
    else
        resp.status(401).json({ message: "No user information available" });
};

export const userLogin = (req, resp) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        req.session.user = user;
        resp.json({ message: `Welcome, ${username}!` });
    }
    else
        resp.status(401).json({ message: "Login failed. Try again" });
};

export const userLogout = (req, resp) => {
    req.session.destroy((err) => {
        if (err)
            resp.status(500).json({ message: "Internal server failure" });
        else
            resp.json({ message: "Logout done" });
    })
};