import express from "express";
import session from "express-session";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();
const products = [
    { id: 1, name: "Twix", price: 1200, qty: 0 },
    { id: 2, name: "Bbeong", price: 1400, qty: 0 },
    { id: 3, name: "Oreo", price: 1800, qty: 0 },
    { id: 4, name: "Pocky", price: 2000, qty: 0 }
];
const users = [
    { id: 1, username: "dukov", password: "1111" },
    { id: 2, username: "marine", password: "assei" },
    { id: 2, username: "yanggang", password: "kawai" },
    { id: 2, username: "admin", password: "qwer1234" }
];

const userCheck = (req, resp, next) => {
    const user = req.session.user;

    if(user)
        next();
    else
        resp.send('<script>alert("Login first"); window.location="/";</script>');
};

app.use(session({
    secret: "myKey",
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "public", "views"));

app.get("/", (req, resp) => {
    const user = req.session.user || {};
    resp.render("index", { username: user.username });
});

app.get("/product", (req, resp) => {
    const user = req.session.user || {};
    resp.render("product", { username: user.username });
});

app.get("/cart", userCheck, (req, resp) => {
    const user = req.session.user || {};
    resp.render("cart", { username: user.username });
});

app.get("/api/userInfo", (req, resp) => {
    const user = req.session.user;

    if (user)
        resp.json({ username: user.username });
    else
        resp.json({ message: "There's no user" });
});

app.get("/api/products", (req, resp) => {
    resp.json(products);
});

app.get("/api/cartInfo", (req, resp) => {
    const cart = req.session.cart || [];

    resp.json(cart);
});

app.get("/api/cartTotal", (req, resp) => {
    const cart = req.session.cart || [];
    const total = cart.reduce((accumulator, product) => {
        return accumulator + (product.price * product.qty);
    }, 0);

    resp.json({ total: total });
});

app.get("/api/logout", (req, resp) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("error", err);
            resp.status(500).json({ message: "로그아웃 실패" });
        }
        else
            resp.json({ message: "로그아웃 성공" });
    });
});

app.post("/api/login", (req, resp) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        req.session.user = user;
        resp.json({ message: "Login Success. Welcome!" });
    }
    else {
        resp.status(401).json({ message: "Login failed. Try again" });
    }
});

app.post("/api/addCart/:productId", (req, resp) => {
    const productId = parseInt(req.params.productId);
    const product = products.find((p) => p.id === productId);

    if (!product)
        return resp.status(404).json({ message: "Product not found" });

    const cart = req.session.cart || [];

    if (cart.length === 0 || !cart.some((c) => c.id === product.id)) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: (product.qty + 1)
        });
    }
    else {
        const targetProduct = cart.find((c) => c.id === product.id);
        targetProduct.qty++;
    }

    req.session.cart = cart.sort((a, b) => a.id - b.id);
    resp.json({ message: "The product added to cart" });
});

app.put("/api/adjustCart/:productId", (req, resp) => {
    const cart = req.session.cart || [];
    const adjust = parseInt(req.body.adjust);
    const targetProduct = cart.find((c) => c.id === parseInt(req.params.productId));
    targetProduct.qty += adjust;

    if (targetProduct.qty < 0)
        targetProduct.qty = 0;

    req.session.cart = cart.sort((a, b) => a.id - b.id);
    resp.json({ message: "Qty adjust done" });
});

app.delete("/api/dropCart/:productId", (req, resp) => {
    const productId = parseInt(req.params.productId);
    let cart = req.session.cart || [];
    cart = cart.filter((element) => element.id !== productId);

    req.session.cart = cart.sort((a, b) => a.id - b.id);
    resp.json({ message: "Remove Done" });
});

app.listen(port, () =>{
    console.log(`Port ${port} ready`);
});