import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/submit2", (req, resp) => {
    const jsonData = req.body;
    console.log(jsonData);
    resp.json({received : jsonData});
});

// app.post("/submit", (req, resp) => {
//     let body = "";

//     req.on("data", (data) => body += data);
//     req.on("end", () => {
//         try {
//             console.log(body);
//             const jsonData = JSON.parse(body);
//             resp.json({ received: jsonData });
//         } catch (err) {
//             resp.status(400).json({error: "wrong input"});
//         }
//     });
// });

app.listen(port, () => {
    console.log(`Port ${port} has opened.`);
});