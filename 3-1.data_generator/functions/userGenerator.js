import fs from "fs";
import path from "path";
import { UserData } from "../class/userData.js";
import _ from "lodash";

// user.csv를 생성하는 함수
export function userGenerator(num) {
    const userInstance = new UserData();
    const userDataArr = [];

    // user 정보를 생성하는 UserData 클래스의 인스턴스를 배열에 복사하고 인스턴스를 reset하는 과정을 num번 반복함
    for (let i = 0; i < num; i++) {
        userDataArr.push(_.cloneDeep(userInstance));
        userInstance.reset();
    }
    
    const userDataCsv = userDataArr.map(user => `${user.userId},${user.userName},${user.userGender},${user.userAge},${user.userBirthDate},${user.userAddress}`).join("\n");
    const userDataCsvHeader = "Id,Name,Gender,Age,Birthdate,Address\n";
    fs.writeFileSync(path.join("./csv", "user.csv"), userDataCsvHeader, "utf8");
    fs.appendFileSync(path.join("./csv", "user.csv"), userDataCsv, "utf8");
}
