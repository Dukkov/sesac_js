import fs from "fs";

// JSON 데이터를 파싱
const jsonData = JSON.parse(fs.readFileSync("./response2.json", "utf-8"));
const data = jsonData.contents.stat; // 'contents'와 'stat'는 실제 필요한 배열이 위치한 키를 지정해주세요.

// updnLine 값이 일치하는 데이터를 필터링하여 그룹화
const groups = data.reduce((acc, cur) => {
  const key = cur.updnLine;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(cur);
  return acc;
}, {});

// 각 그룹에서 시간대별로 congestionCar 값을 비교
Object.entries(groups).forEach(([key, items]) => {
  console.log(`updnLine: ${key}`);
  items.forEach(item => {
    item.data.forEach(dataItem => {
      const time = `${dataItem.hh}:${dataItem.mm}`;
      const avgCongestion = dataItem.congestionCar.reduce((a, b) => a + b, 0) / dataItem.congestionCar.length;
      console.log(`time: ${time}, average congestion: ${avgCongestion}`);
    });
  });
});
