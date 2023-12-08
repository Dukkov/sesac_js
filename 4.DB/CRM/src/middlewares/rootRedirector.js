export const rootRedirector = (req, resp, next) => {
    if (req.url === "/")
        resp.redirect("/users/1");
    else
        next();
};