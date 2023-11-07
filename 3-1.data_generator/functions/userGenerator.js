import fs from "fs";
import { UserData } from "../class/userData.js";
import _ from "lodash";

export function userGenerator(num) {
    const userInstance = new UserData();
    const userDataArr = [];

    for (let i = 0; i < num; i++) {
        userDataArr.push(_.cloneDeep(userInstance));
        userInstance.reset();
    }
    
    const userDataCsv = userDataArr.map(user => `${user.userId},${user.userName},${user.userGender},${user.userAge},${user.userBirthDate},${user.userAddress}`).join("\n");
    const userDataCsvHeader = "Id,Name,Gender,Age,Birthdate,Address\n";
    fs.writeFileSync("./csv/user.csv", userDataCsvHeader, "utf8");
    fs.appendFileSync("./csv/user.csv", userDataCsv, "utf8");
}
