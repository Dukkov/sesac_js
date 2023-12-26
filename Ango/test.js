import fs from 'fs';
import csv from 'csv-parser';
import iconv from 'iconv-lite';

const results = [];

fs.createReadStream('getOffCount.csv')
  .pipe(iconv.decodeStream('CP949'))
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });