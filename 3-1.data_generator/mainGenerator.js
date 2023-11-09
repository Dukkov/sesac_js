import { userGenerator } from "./functions/userGenerator.js";
import { storeGenerator } from "./functions/storeGenerator.js";
import { orderGenerator } from "./functions/orderGenerator.js";
import { itemGenerator } from "./functions/itemGenerator.js";
import { orderAndItemGenerator } from "./functions/orderAndItemGenerator.js";

// UserData, UserComponent 클래스를 사용해 user.csv를 만드는 userGenerator 함수 호출
userGenerator(1000);

// StoreData, StoreComponent 클래스를 사용해 store.csv를 만드는 storeGenerator 함수 호출
storeGenerator(100);

// OrderData, OrderComponent 클래스를 사용해 order.csv를 만드는 orderGenerator 함수 호출
// user.csv, store.csv 파일이 생성될 시간이 필요하므로 1초 기다렸다가 호출
setTimeout(() => {
    orderGenerator(10000);
}, 1000);

//ItemData, ItemComponent 클래스를 사용해 item.csv를 만드는 itemGenerator 함수 호출
itemGenerator(20);

//OrderAndItemData, OrderAndItemComponent 클래스를 사용해 orderitem.csv를 만드는 orderAndItemGenerator 함수 호출
// order.csv, item.csv 파일이 생성될 시간이 필요하므로 3초 기다렸다가 호출
setTimeout(() => {
    orderAndItemGenerator(50000);
}, 3000);