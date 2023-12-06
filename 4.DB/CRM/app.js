import express from "express";
import path from "path";
import { initDatabase } from "./src/database/initDB.js";
import { router as userRouter } from "./src/routes/userRoutes.js";
import { router as orderRouter } from "./src/routes/orderRoutes.js"
import { router as orderItemRouter } from "./src/routes/orderItemRoutes.js"
import { router as itemRouter } from "./src/routes/itemRoutes.js";
import { router as storeRouter } from "./src/routes/storeRoutes.js";

const app = express();
const port = 8000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "public", "views"));

app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/order-items", orderItemRouter);
app.use("/items", itemRouter);
app.use("/stores", storeRouter);

initDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Port ${port} ready`);
        });
    })
    .catch(err => console.error(err));