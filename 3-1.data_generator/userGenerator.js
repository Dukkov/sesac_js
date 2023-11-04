import { fs } from "fs";
import { v4 as uuidv4 } from "uuid";

class userData {
    userIdGenerate() {
        this.userId = uuidv4();
    }

    userGenderGenerate() {
        this.userGender = Math.random() < 0.5 ? "male" : "female";
    }

    userNameGenerate() {
        if (this.userGender === "male") {
            const userNameFile = fs.readFileSync("./userNameElement.json", {encoding: "utf8"});
            const userNameData = JSON.parse(userNameFile);
        }
        else {

        }
    }

    userAgeGenerate() {

    }

    userBirthdateGenerate() {

    }

    userAddressGenerate() {

    }

    toString() {

    }
}