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

app.use(session({
    secret: "myKey",
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "product.html"));
});

app.get("/products", (req, resp) => {
    resp.json(products);
});

app.get("/cart", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "cart.html"));
});

app.get("/cartInfo", (req, resp) => {
    const cart = req.session.cart || [];

    resp.json(cart);
});

app.get("/cartTotal", (req, resp) => {
    const cart = req.session.cart || [];
    const total = cart.reduce((accumulator, product) => {
        return accumulator + (product.price * product.qty);
    }, 0);

    console.log(total);
    resp.json({ total: total });
});

app.post("/addCart/:productId", (req, resp) => {
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

app.put("/adjustCart/:productId", (req, resp) => {
    const cart = req.session.cart || [];
    const adjust = parseInt(req.body.adjust);
    const targetProduct = cart.find((c) => c.id === parseInt(req.params.productId));
    targetProduct.qty += adjust;

    if (targetProduct.qty < 0)
        targetProduct.qty = 0;

    req.session.cart = cart.sort((a, b) => a.id - b.id);
    resp.json({ message: "Qty adjust done" });
});

app.delete("/dropCart/:productId", (req, resp) => {
    const productId = parseInt(req.params.productId);
    let cart = req.session.cart || [];
    cart = cart.filter((element) => element.id !== productId);

    req.session.cart = cart.sort((a, b) => a.id - b.id);
    resp.json({ message: "Remove Done" });
});

app.listen(port, () =>{
    console.log(`Port ${port} ready`);
});