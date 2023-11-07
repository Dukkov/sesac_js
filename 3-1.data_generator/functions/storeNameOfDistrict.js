import fs from "fs";

export function storeNameOfDistrict(district) {
    const storeNameFile = fs.readFileSync("./JSON/storeElements.json", "utf8");
    const storeNameData = JSON.parse(storeNameFile);
    switch (district) {
        case "강남구" :
            return (storeNameData.gangnamLocation[Math.floor(Math.random() * 6)]);
        case "강동구" :
            return (storeNameData.gangdongLocation[Math.floor(Math.random() * 6)]);
        case "강북구" :
            return (storeNameData.gangbukLocation[Math.floor(Math.random() * 6)]);
        case "강서구" :
            return (storeNameData.gangseoLocation[Math.floor(Math.random() * 6)]);
        case "관악구" :
            return (storeNameData.gwanakLocation[Math.floor(Math.random() * 6)]);
        case "광진구" :
            return (storeNameData.gwangjinLocation[Math.floor(Math.random() * 6)]);
        case "구로구" :
            return (storeNameData.guroLocation[Math.floor(Math.random() * 6)]);
        case "금천구" :
            return (storeNameData.geumcheonLocation[Math.floor(Math.random() * 6)]);
        case "노원구" :
            return (storeNameData.nowonLocation[Math.floor(Math.random() * 6)]);
        case "도봉구" :
            return (storeNameData.dobongLocation[Math.floor(Math.random() * 6)]);
        case "동대문구" :
            return (storeNameData.dongdaemunLocation[Math.floor(Math.random() * 6)]);
        case "동작구" :
            return (storeNameData.dongjakLocation[Math.floor(Math.random() * 6)]);
        case "마포구" :
            return (storeNameData.mapoLocation[Math.floor(Math.random() * 6)]);
        case "서대문구" :
            return (storeNameData.seodaemunLocation[Math.floor(Math.random() * 6)]);
        case "서초구" :
            return (storeNameData.seochoLocation[Math.floor(Math.random() * 6)]);
        case "성동구" :
            return (storeNameData.seongdongLocation[Math.floor(Math.random() * 6)]);
        case "성북구" :
            return (storeNameData.seongbukLocation[Math.floor(Math.random() * 6)]);
        case "송파구" :
            return (storeNameData.songpaLocation[Math.floor(Math.random() * 6)]);
        case "양천구" :
            return (storeNameData.yangcheonLocation[Math.floor(Math.random() * 6)]);
        case "영등포구" :
            return (storeNameData.yeongdeungpoLocation[Math.floor(Math.random() * 6)]);
        case "용산구" :
            return (storeNameData.yongsanLocation[Math.floor(Math.random() * 6)]);
        case "은평구" :
            return (storeNameData.eunpyeongLocation[Math.floor(Math.random() * 6)]);
        case "종로구" :
            return (storeNameData.jongnoLocation[Math.floor(Math.random() * 6)]);
        case "중구" :
            return (storeNameData.jungguLocation[Math.floor(Math.random() * 6)]);
        case "중랑구" :
            return (storeNameData.jungrangLocation[Math.floor(Math.random() * 6)]);
    }
}