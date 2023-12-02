import { products } from "../data/product.js";

export const cartInfo = (req, resp) => {
    const cart = req.session.cart || [];

    resp.json(cart);
};

export const cartTotal = (req, resp) => {
    const cart = req.session.cart || [];
    const total = cart.reduce((accumulator, product) => {
        return accumulator + (product.price * product.qty);
    }, 0);

    resp.json({ total: total });
}

export const addCart = (req, resp) => {
    const productId = parseInt(req.params.productId);
    const product = products.find((p) => p.id === productId);

    if (!product)
        return resp.status(404).json({ message: "Product not found" });

    const cart = req.session.cart || [];

    if (cart.length === 0 || !cart.some((c) => c.id === product.id)) {
        cart.push({
            id: product.id,
            image: product.image,
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
}

export const adjustCart = (req, resp) => {
    const cart = req.session.cart || [];
    const adjust = parseInt(req.body.adjust);
    const targetProduct = cart.find((c) => c.id === parseInt(req.params.productId));
    targetProduct.qty += adjust;

    if (targetProduct.qty < 0)
        targetProduct.qty = 0;

    req.session.cart = cart.sort((a, b) => a.id - b.id);
    resp.json({ message: "Qty adjust done" });
}

export const dropCart = (req, resp) => {
    const productId = parseInt(req.params.productId);
    let cart = req.session.cart || [];
    cart = cart.filter((element) => element.id !== productId);

    req.session.cart = cart.sort((a, b) => a.id - b.id);
    resp.json({ message: "Remove Done" });
}