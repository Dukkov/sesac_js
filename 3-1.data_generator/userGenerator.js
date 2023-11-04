import fs from "fs";
import { v4 as uuidv4 } from "uuid";

class userData {
    userIdGenerate() {
        this.userId = uuidv4();
    }

    userGenderGenerate() {
        this.userGender = Math.random() < 0.5 ? "male" : "female";
    }

    userNameGenerate() {
        const userNameFile = fs.readFileSync("./userNameElement.json", {encoding: "utf8"});
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

    // userAgeGenerate() {

    // }

    // userBirthdateGenerate() {

    // }

    // userAddressGenerate() {

    // }

    // toString() {

    // }
}

const user1 = new userData();
user1.userGenderGenerate();
user1.userNameGenerate();
console.log(user1.userGender);
console.log(user1.userName);