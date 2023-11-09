import fs from "fs";
import path from "path";

// store.csv, user.csv 파일을 읽고 storeID, userID만 추출해서 배열로 저장하는 클래스
export class OrderComponent {
    constructor() {
        const storeIdFile = fs.readFileSync(path.join("./csv", "store.csv"), "utf8");
        const storeIdData = storeIdFile.split(/\n|\r/);
        storeIdData.shift();
        this.storeIdArr = storeIdData.map(data => {
            const storeIdLine = data.split(",");
            return storeIdLine[0]; 
        })
        
        const userIdFile = fs.readFileSync(path.join("./csv", "user.csv"), "utf8");
        const userIdData = userIdFile.split(/\n|\r/);
        userIdData.shift();
        this.userIdArr = userIdData.map(data => {
            const userIdLine = data.split(",");
            return userIdLine[0]; 
        })
    }
}