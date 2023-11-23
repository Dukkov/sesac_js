import express from "express";
import session from "express-session";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();
const products = [
    { id: 1, name: "Twix", price: 1200 },
    { id: 2, name: "Bbeong", price: 1400 },
    { id: 3, name: "Oreo", price: 1800 },
    { id: 4, name: "Pocky", price: 2000 }
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
    const newCart = [];
    const cartMap = new Map();

    cart.forEach(element => {
        if (cartMap.has(element.id))
            cartMap.set(element.id, cartMap.get(element.id) + 1);
        else
            cartMap.set(element.id, 0);
    });

    for (let i = 0; i < products.length; i++) {
        newCart.push({
            id: products[i].id,
            name: products[i].name,
            price: products[i].price,
            quantity: cartMap.get(products[i].id)
        });
    }
    resp.json(cart);
});

app.get("/cartMap", (req, resp) => {
    const cart = req.session.cart || [];
    const newCart = [];
    const cartMap = new Map();

    cart.forEach(element => {
        if (cartMap.has(element.id))
            cartMap.set(element.id, cartMap.get(element.id) + 1);
        else
            cartMap.set(element.id, 1);
    });

    for (let i = 0; i < products.length; i++) {
        newCart.push({
            id: products[i].id,
            name: products[i].name,
            price: products[i].price,
            quantity: cartMap.get(products[i].id)
        });
    }
    resp.json(newCart);
});

app.post("/addCart/:productId", (req, resp) => {
    const productId = parseInt(req.params.productId);
    const product = products.find((p) => p.id === productId);

    if (!product)
        return resp.status(404).json({ message: "Product not found" });

    const cart = req.session.cart || [];

    cart.push({
        id: product.id,
        name: product.name,
        price: product.price
    });

    req.session.cart = cart;
    resp.json({ message: "The product added to cart" });
});

app.listen(port, () =>{
    console.log(`Port ${port} ready`);
});