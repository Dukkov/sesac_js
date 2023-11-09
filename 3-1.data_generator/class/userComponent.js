import fs from "fs";
import path from "path";

// userNameElement.json 파일을 읽어서 그 내용을 userNameData에 저장하고, addressElements.json 파일을 읽어서 그 내용을 cityNameData에 저장하는 클래스
// 또한 Date 모듈을 사용해 오늘 일자를 생성하고 저장함
export class UserComponent {
    constructor() {
        const userNameFile = fs.readFileSync(path.join("./JSON", "userNameElement.json"), "utf8");
        this.userNameData = JSON.parse(userNameFile);

        const cityNameFile = fs.readFileSync(path.join("./JSON", "addressElements.json"), "utf8");
        this.cityNameData = JSON.parse(cityNameFile);

        // 오늘 날짜를 yyyy, mm, dd 형식으로 각각 나눠 저장함
        const today = new Date().toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        this.todayYear = parseInt(today.slice(0, 4));
        this.todayMonth = parseInt(today.slice(6, 8));
        this.todayDay = parseInt(today.slice(10, 12));
    }
}