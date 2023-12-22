const WebSocket = require("ws");
const express = require("express");
const path = require("path");

const port = 8080; // well-known port -- 정해져 있는 포트(번호) ex) 25 -- smtp, 22 -- ssh, 80 -- http, 21 -- ftp, 23 -- telnet etc..
const express_port = 3000;
const wss = new WebSocket.Server({ port: port });

// 익스프레스 서버 생성
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client.html"));
});

wss.on("listening", () => {
  console.log(`웹소켓 ${port}번에 대기중!`);
});

wss.on("connection", (ws, req) => {
  const clientIp = req.socket.remoteAddress;
  console.log("클라이언트 접속함", clientIp);

  ws.on("message", (message) => {
    // 연결된 이후 내부 메세지 처리하는 부분
    console.log(message.toString());

    // 받은 문자열 파싱해서 객체화
    const parsedMessage = JSON.parse(message);
    console.log(parsedMessage.content);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        const messageType = client === ws ? "sent" : "received";
        const messageObj = { type: messageType, content: parsedMessage.content };
        client.send(JSON.stringify(messageObj));
      }
    });
  });

  ws.on("close", () => {});
});

app.listen(express_port, () => {
  console.log(`익스프레스 서버가 준비중, ${express_port}`);
});

console.log("채팅 서버가 시작되었습니다.");
