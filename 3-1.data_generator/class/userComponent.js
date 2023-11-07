import fs from "fs";

export class UserComponent {
    constructor() {
        const userNameFile = fs.readFileSync("./JSON/userNameElement.json", "utf8");
        this.userNameData = JSON.parse(userNameFile);

        const cityNameFile = fs.readFileSync("./JSON/addressElements.json", "utf8");
        this.cityNameData = JSON.parse(cityNameFile);

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