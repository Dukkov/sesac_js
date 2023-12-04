export const mainPage = (req, resp) => {
    const user = req.session.user || {};

    resp.render("index", { username: user.username });
};