import { v4 as uuidv4 } from "uuid";
import { dateOfMonth } from "../functions/dateOfMonth.js";
import { districtOfCity } from "../functions/districtOfCity.js";
import { UserComponent } from "./userComponent.js";

// UserComponent를 이용해 랜덤한 userName, userAddress, userBirthdate를 생성하는 메소드들로 이루어진 클래스
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

    // userGender를 기반으로 userName을 생성하는 메소드
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
        this.userAge = Math.floor(Math.random() * 77) + 14;
    }

    // userAge와 오늘 날짜를 기준으로 userBirthdate 범위를 정하고, 그 범위 안에서 랜덤한 생년월일을 생성하는 메소드
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

    // UserComponent에 저장된 도시 정보를 기반으로 지역구, 상세주소를 생성하는 메소드
    userAddressGenerate() {
        this.userAddressCity = this.component.cityNameData.city[Math.floor(Math.random() * 30)];
        this.userAddressDistrict = districtOfCity(this.userAddressCity);
        this.userAddressRoad = (Math.floor(Math.random() * 100) + 1) + (Math.random() < 0.5 ? "길" : "로");
        this.userAddressNum = Math.floor(Math.random() * 100) + 1;
        this.userAddress = `${this.userAddressCity} ${this.userAddressDistrict} ${this.userAddressRoad} ${this.userAddressNum}`;
    }
}