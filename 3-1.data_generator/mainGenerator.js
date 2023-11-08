import { userGenerator } from "./functions/userGenerator.js";
import { storeGenerator } from "./functions/storeGenerator.js";
import { orderGenerator } from "./functions/orderGenerator.js";
import { itemGenerator } from "./functions/itemGenerator.js";
import { orderAndItemGenerator } from "./functions/orderAndItemGenerator.js";

userGenerator(1000);
storeGenerator(100);
setTimeout(() => {
    orderGenerator(10000);
}, 1000);
itemGenerator(20);
setTimeout(() => {
    orderAndItemGenerator(50000);
}, 3000);