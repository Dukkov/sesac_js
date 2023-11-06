import { v4 as uuidv4} from "uuid";

export class OrderAndItemData {
    orderAndItemIdGenerate() {
        this.orderAndItemId = uuidv4();
    }

    
}