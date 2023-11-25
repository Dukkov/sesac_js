const url = require("url");

const myUrl = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%83%88%EC%8B%B9";

const parsedUrl = url.parse(myUrl, true);
console.log(parsedUrl);

const myUrl2 = {
    protocol: "https",
    auth: null,
    hostname: "www.naver.com",
    query: {
        query: "SeSAC"
    }
};

const assembledUrl = url.format(myUrl2);
console.log(assembledUrl);