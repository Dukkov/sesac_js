import { v4 as uuidv4 } from "uuid";
import { dateOfMonth } from "../functions/dateOfMonth.js";
import { districtOfCity } from "../functions/districtOfCity.js";
import { UserComponent } from "./userComponent.js";

export class UserData {
    constructor() {
        this.component = new UserComponent();
        this.init();
    }

    init() {
        this.userIdGenerate();
        this.userGenderGenerate();
        this.userNameGenerate();
        this.userAgeGenerate();
        this.userBirthdateGenerate();
        this.userAddressGenerate();
    }

    reset() {
        this.init();
    }

    userIdGenerate() {
        this.userId = uuidv4();
    }

    userGenderGenerate() {
        this.userGender = Math.random() < 0.5 ? "Male" : "Female";
    }

    userNameGenerate() {
        const userLastName = this.component.userNameData.lastName[Math.floor(Math.random() * 50)];
        let userFirstName;
        if (this.userGender === "Male")
            userFirstName = this.component.userNameData.maleFirstName[Math.floor(Math.random() * 96)];
        else
            userFirstName = this.component.userNameData.femaleFirstName[Math.floor(Math.random() * 96)];
        this.userName = `${userLastName}${userFirstName}`;
    }

    userAgeGenerate() {
        this.userAge = Math.floor(Math.random() * 87) + 14;
    }

    userBirthdateGenerate() {
        this.userBirthYear = Math.random() < 0.5 ? this.component.todayYear - this.userAge : this.component.todayYear - this.userAge - 1;
        if (this.userBirthYear == this.component.todayYear - this.userAge) {
            this.userBirthMonth = Math.floor(Math.random() * this.component.todayMonth) + 1;
            const dayRange = dateOfMonth(this.userBirthMonth);
            if (this.userBirthMonth == this.component.todayMonth)
                this.userBirthDay = Math.floor(Math.random() * this.component.todayDay) + 1;
            else
                this.userBirthDay = Math.floor(Math.random() * dayRange) + 1;
        }
        else {
            this.userBirthMonth = this.component.todayMonth + Math.floor(Math.random() * (13 - this.component.todayMonth));
            const dayRange = dateOfMonth(this.userBirthMonth);
            if (this.userBirthMonth == this.component.todayMonth)
                this.userBirthDay = this.component.todayDay + Math.floor(Math.random() * (dayRange - this.component.todayDay)) + 1;
            else
                this.userBirthDay = Math.floor(Math.random() * dayRange) + 1;
        }
        this.userBirthDate = `${this.userBirthYear}-${String(this.userBirthMonth).padStart(2, "0")}-${String(this.userBirthDay).padStart(2, "0")}`;
    }

    userAddressGenerate() {
        this.userAddressCity = this.component.cityNameData.city[Math.floor(Math.random() * 30)];
        this.userAddressDistrict = districtOfCity(this.userAddressCity);
        this.userAddressRoad = (Math.floor(Math.random() * 100) + 1) + (Math.random() < 0.5 ? "길" : "로");
        this.userAddressNum = Math.floor(Math.random() * 100) + 1;
        this.userAddress = `${this.userAddressCity} ${this.userAddressDistrict} ${this.userAddressRoad} ${this.userAddressNum}`;
    }
}