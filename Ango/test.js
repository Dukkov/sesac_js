import fs from "fs";
import csv from "csv-parser";

function readCSV(headers) {
  const result = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream("./getOffCount.csv")
      .pipe(csv({ headers, skipLines: 1 }))
      .on("data", (data) => result.push(data))
      .on("end", () => {
        resolve(result);
      });
  });
}
// const data = JSON.parse(fs.readFileSync("./JSON/stationCodes.json", "utf8"));

const stationList = ["강남"];
const dow = ["MON", "WED", "FRI"];
const time = ["08", "13"];

function parseJSONData(filePath) {
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return jsonData.contents.stat;
}

async function main() {
  let result = [];
  // 요일별 시간대별 하차인원 csv 불러오기
  const headers = [
    "stationName",
    "dow",
    "b06",
    "h06",
    "h07",
    "h08",
    "h09",
    "h10",
    "h11",
    "h12",
    "h13",
    "h14",
    "h15",
    "h16",
    "h17",
    "h18",
    "h19",
    "h20",
    "h21",
    "h22",
    "h23",
    "a24",
  ];

  const getOffCSV = await readCSV(headers);

  stationList.forEach((station) => {
    let trains = [];

    dow.forEach((dow) => {
      time.forEach((time) => {
        // console.log(getOffCSV);
        const getOffCountByTime = getOffCSV.find((x) => x.stationName === station && x.dow === dow);
        console.log(getOffCountByTime);

        const GetOffData = parseJSONData(`./responses/getOffRate/하차_${station}_${dow}_${time}.json`);
        const GetOffGroups = groupData(GetOffData);
        const train = processGroupedData(dow, getOffCountByTime, GetOffGroups); // 객체로 return

        trains.push(...train);
      });
    });

    result.push({ stationName: station, train: trains });
  });

  return result;
}

// 데이터를 그룹화하는 함수(시간대 별로 열차 모음)
function groupData(data) {
  return data.reduce((acc, cur) => {
    const key = cur.updnLine;

    if (!acc[key]) {
      acc[key] = {};
    }
    cur.data.forEach((dataItem) => {
      const time = `${dataItem.hh}:${dataItem.mm}`;
      if (!acc[key][time]) {
        acc[key][time] = [];
      }
      acc[key][time] = acc[key][time].concat(dataItem.getOffCarRate);
    });
    return acc;
  }, {});
}

// ============================== 하차 비율 ==============================
// 그룹화된 데이터를 가공하는 함수
function processGroupedData(dow, getOffCountByTime, groups) {
  let train = [];
  Object.entries(groups).forEach(([updnLine, times]) => {
    Object.entries(times).forEach(([time, cars]) => {
      // 칸 별로 혼잡도 모으기(10개의 칸 => 1, 11, 21, 32... 이런식으로 나머지가 같은거로 묶음)
      let getOffByCar = Array.from({ length: 10 }, (_, i) =>
        Array.from({ length: Math.ceil(cars.length / 10) }, (_, j) => cars[j * 10 + i])
      );

      // 칸 별 하차 비율 평균값
      const avg = getOffByCar.map((arr) => {
        const length = arr.length;
        return (arr.reduce((a, b) => a + b) / length / 100).toFixed(2);
      });

      // 칸 별 하차 인원
      const getOffCount = Math.round(getOffCountByTime / 6 / 2);
      const getOffCarCount = avg.map((percentage) => Math.round(percentage * getOffCount));

      train.push({
        updnLine: parseInt(updnLine),
        dow,
        hh: parseInt(time.split(":")[0]),
        mm: parseInt(time.split(":")[1]),
        getOffCarRate: getOffCarCount,
      });
    });
  });
  return train;
}

// console.log(main());
main();
//
