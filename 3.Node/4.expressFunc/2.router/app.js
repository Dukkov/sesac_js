import express from "express";
import { userRouter as ur } from "./src/userRouter.js";
import { productRouter as pr} from "./src/productRouter.js";
import { cartRouter as cr} from "./src/cartRouter.js";

const app = express();
const port = 3000;

app.use("/user", ur);
app.use("/product", pr);
app.use("/cart", cr);

app.get("/", (req, resp) => {
    resp.send("Main page");
});

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});