export const mainPage = (req, resp) => {
    const user = req.session.user || {};

    resp.render("index", { username: user.username, currentPage: "home" });
}

export const productPage = (req, resp) => {
    const user = req.session.user || {};

    resp.render("product", { username: user.username, currentPage: "products" });
}

export const cartPage = (req, resp) => {
    const user = req.session.user || {};

    resp.render("cart", { username: user.username, currentPage: "cart" });
}