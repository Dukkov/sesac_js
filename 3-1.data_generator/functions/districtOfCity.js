import fs from "fs";

export function districtOfCity(city) {
    const districtFile = fs.readFileSync("./JSON/addressElements.json", "utf8");
    const districtData = JSON.parse(districtFile);
    switch (city) {
        case "서울":
            return (districtData.seoulDistrict[Math.floor(Math.random() * 25)]);
        case "부산":
            return (districtData.busanDistrict[Math.floor(Math.random() * 16)]);
        case "인천":
            return (districtData.incheonDistrict[Math.floor(Math.random() * 10)]);
        case "대구":
            return (districtData.daeguDistrict[Math.floor(Math.random() * 9)]);
        case "대전":
            return (districtData.daejeonDistrict[Math.floor(Math.random() * 5)]);
        case "광주":
            return (districtData.gwangjuDistrict[Math.floor(Math.random() * 5)]);
        case "수원":
            return (districtData.suwonDistrict[Math.floor(Math.random() * 4)]);
        case "울산":
            return (districtData.ulsanDistrict[Math.floor(Math.random() * 5)]);
        case "용인":
            return (districtData.yonginDistrict[Math.floor(Math.random() * 3)]);
        case "고양":
            return (districtData.goyangDistrict[Math.floor(Math.random() * 3)]);
        case "창원":
            return (districtData.changwonDistrict[Math.floor(Math.random() * 5)]);
        case "성남":
            return (districtData.sungnamDistrict[Math.floor(Math.random() * 3)]);
        case "청주":
            return (districtData.chungjuDistrict[Math.floor(Math.random() * 4)]);
        case "부천":
            return (districtData.bucheonDistrict[Math.floor(Math.random() * 3)]);
        case "천안":
            return (districtData.cheonahnDistrict[Math.floor(Math.random() * 2)]);
        case "전주":
            return (districtData.jeonjuDistrict[Math.floor(Math.random() * 2)]);
        case "안산":
            return (districtData.ahnsanDistrict[Math.floor(Math.random() * 2)]);
        case "안양":
            return (districtData.ahnyangDistrict[Math.floor(Math.random() * 2)]);
    }
}