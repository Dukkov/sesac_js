import { userGenerator } from "./functions/userGenerator.js";
import { storeGenerator } from "./functions/storeGenerator.js";
import { orderGenerator } from "./functions/orderGenerator.js";
import { itemGenerator } from "./functions/itemGenerator.js";
import { orderAndItemGenerator } from "./functions/orderAndItemGenerator.js";

async function mainGenerator() {
    console.time("test: ");
    await userGenerator(1000);
    await storeGenerator(100)
        .then(orderGenerator(10000));
    await itemGenerator(20)
        .then(orderAndItemGenerator(50000));
    console.timeEnd("test: ");
}

mainGenerator();