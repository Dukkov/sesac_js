import express from "express";
import expressWs from "express-ws";
import WebSocket from "ws";
import path from "path";

const port = 3000;
const __dirname = path.resolve();

const app = express();
expressWs(app);

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "client2.html"));
});

const wsClients = new Map();

app.ws("/chat", (ws, req) => {
    const clientIp = req.socket.remoteAddress;
    console.log("클라이언트 접속:", clientIp);

    ws.on("message", (message) => {
        let parsedMessage = "";
        let messageType;
        let username;

        try {
            parsedMessage = JSON.parse(message);
            messageType = parsedMessage.type;
            username = parsedMessage.username;

            console.log(parsedMessage);
            console.log(username);
            console.log(clientIp, parsedMessage.content);
        } catch (err) {
            console.error("Invalid JSON Format: ", err);
            return;
        }

        if (username && !wsClients.has(username)) {
            wsClients.set(username, ws);
        }
        
        if (messageType !== "session") {
            wsClients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    const messageType = client === ws ? "sent" : "received";
                    const messageObj = { type: messageType, sender: username, content: parsedMessage?.content }
    
                    client.send(JSON.stringify(messageObj));
                }
            });
        }
    });

    ws.on("close", () => {
        console.log("클라이언트 접속 종료");    
    });
});

app.listen(port, () => {
    console.log(`Port ${port} ready`);
});