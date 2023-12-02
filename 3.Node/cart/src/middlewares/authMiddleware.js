export const checkUser = (req, resp, next) => {
    const user = req.session.user;

    if(user)
        next();
    else
        resp.status(401).json({ message: "Login first" });
};