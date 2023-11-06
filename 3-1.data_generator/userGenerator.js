import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { dateOfMonth } from "./dateOfMonth.js";
import { districtOfCity } from "./districtOfCity.js";

const userNameFile = fs.readFileSync("./userNameElement.json", "utf8");
const cityNameFile = fs.readFileSync("./addressElements.json", "utf8");

export class UserData {
    userIdGenerate() {
        this.userId = uuidv4();
    }

    userGenderGenerate() {
        this.userGender = Math.random() < 0.5 ? "male" : "female";
    }

    userNameGenerate() {
        const userNameData = JSON.parse(userNameFile);
        const userLastName = userNameData.lastName[Math.floor(Math.random() * 50)];
        let userFirstName;
        if (this.userGender === "male") {
            userFirstName = userNameData.maleFirstName[Math.floor(Math.random() * 96)];
        }
        else {
            userFirstName = userNameData.femaleFirstName[Math.floor(Math.random() * 96)];
        }
        this.userName = userLastName + userFirstName;
    }

    userAgeGenerate() {
        this.userAge = Math.floor(Math.random() * 87) + 14;
    }

    userBirthdateGenerate() {
        const today = new Date().toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        const todayYear = parseInt(today.slice(0, 4));
        const todayMonth = parseInt(today.slice(6, 8));
        const todayDay = parseInt(today.slice(10, 12));
        this.userBirthYear = Math.random() < 0.5 ? todayYear - this.userAge : todayYear - this.userAge - 1;
        if (this.userBirthYear == todayYear - this.userAge) {
            this.userBirthMonth = Math.floor(Math.random() * todayMonth) + 1;
            const dayRange = dateOfMonth(this.userBirthMonth);
            if (this.userBirthMonth == todayMonth)
                this.userBirthDay = Math.floor(Math.random() * todayDay) + 1;
            else
                this.userBirthDay = Math.floor(Math.random() * dayRange) + 1;
        }
        else {
            this.userBirthMonth = todayMonth + Math.floor(Math.random() * (13 - todayMonth));
            const dayRange = dateOfMonth(this.userBirthMonth);
            if (this.userBirthMonth == todayMonth)
                this.userBirthDay = todayDay + Math.floor(Math.random() * (dayRange - todayDay)) + 1;
            else
                this.userBirthDay = Math.floor(Math.random() * dayRange) + 1;
        }
        this.userBirthDate = this.userBirthYear + "-" + String(this.userBirthMonth).padStart(2, "0") + "-" + String(this.userBirthDay).padStart(2, "0");
    }

    userAddressGenerate() {
        const cityNameData = JSON.parse(cityNameFile);
        this.userAddressCity = cityNameData.city[Math.floor(Math.random() * 30)];
        this.userAddressDistrict = districtOfCity(this.userAddressCity);
        this.userAddressRoad = (Math.floor(Math.random() * 100) + 1) + (Math.random() < 0.5 ? "길" : "로");
        this.userAddressNum = Math.floor(Math.random() * 100) + 1;
        this.userAddress = this.userAddressCity + " " + this.userAddressDistrict + " " + this.userAddressRoad + " " + this.userAddressNum;
    }
}

const userDataArr = [];

for (let i = 0; i < 1000; i++) {
    const userInstance = new UserData();
    userInstance.userIdGenerate();
    userInstance.userGenderGenerate();
    userInstance.userNameGenerate();
    userInstance.userAgeGenerate();
    userInstance.userBirthdateGenerate();
    userInstance.userAddressGenerate();
    userDataArr.push(userInstance);
}

const userDataCsv = userDataArr.map(user => `${user.userId},${user.userName},${user.userGender},${user.userAge},${user.userBirthDate},${user.userAddress}`).join("\n");
const userDataCsvHeader = "Id,Name,Gender,Age,Birthdate,Address\n";
fs.writeFileSync("user.csv", userDataCsvHeader, "utf8");
fs.appendFileSync("user.csv", userDataCsv, "utf8");