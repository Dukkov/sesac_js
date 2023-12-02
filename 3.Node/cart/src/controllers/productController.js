import { products } from "../data/product.js";

export const productsInfo = (req, resp) => {
    resp.json(products);
};