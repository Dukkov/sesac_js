import axios from 'axios';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const stationCodes = Array(43).fill().map((_, i) => i + 1); // 실제 역 코드로 교체해야 합니다.
const dows = ['MON', 'WED', 'FRI'];
const hhs = ['08', '13'];
const appKey = "ngMWpgUGOu8lmo1qAY4Nx7NG3U7KOy5O3MTC4ZOf";

const makeRequest = async (stationCode, dow, hh) => {
    const url = `https://apis.openapi.sk.com/puzzle/subway/congestion/stat/car/stations/${stationCode}?dow=${dow}&hh=${hh}`;
    const headers = {
        'appkey': appKey,
        'Accept': 'application/json'
    };

    try {
        const response = await axios.get(url, { headers });
        const filePath = path.join(__dirname, 'responses', 'congestion', `${stationCode}_${dow}_${hh}.json`);
        fs.writeFileSync(filePath, JSON.stringify(response.data));
    } catch (error) {
        console.error(`Error occurred while fetching data for station code ${stationCode}: `, error);
        process.exit(1); // 에러 발생 시 프로세스 종료
    }
}

const getCongestionData = async () => {
    for (const stationCode of stationCodes) {
        for (const dow of dows) {
            for (const hh of hhs) {
                await makeRequest(stationCode, dow, hh);
                await new Promise(resolve => setTimeout(resolve, 500)); // 0.5초 대기
            }
        }
    }
}

getCongestionData();
