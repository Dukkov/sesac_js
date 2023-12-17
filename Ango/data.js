import fs from "fs";

// JSON 데이터를 파싱하는 함수
function parseJSONData(filePath) {
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return jsonData.contents.stat;
}

// 데이터를 그룹화하는 함수
function groupData(data) {
  return data.reduce((acc, cur) => {
    const key = cur.updnLine;
    if (!acc[key]) {
      acc[key] = {};
    }
    cur.data.forEach(dataItem => {
      const time = `${dataItem.hh}:${dataItem.mm}`;
    if (!acc[key][time]) {
      acc[key][time] = [];
    }
    acc[key][time] = acc[key][time].concat(dataItem.congestionCar);
  });
  return acc;
}, {});
}

// 그룹화된 데이터를 가공하는 함수
function processGroupedData(groups) {
  let output = [];
  Object.entries(groups).forEach(([updnLine, times]) => {
    Object.entries(times).forEach(([time, cars]) => {
      let chunks = [];
      for (let i = 0; i < cars.length; i += 10) {
        chunks.push(cars.slice(i, i + 10).toString());
      }
      output.push({
        updnLine,
        time,
        congestionCar: chunks,
      });
    });
  });
  return output;
}

// 데이터를 파일로 저장하는 함수
function saveDataToFile(data, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// 메인 함수
function main(inputFilePath, outputFilePath) {
  const data = parseJSONData(inputFilePath);
  const groups = groupData(data);
  const output = processGroupedData(groups);
  saveDataToFile(output, outputFilePath);
}

// 실행
main("./response2.json", "./output.json");
