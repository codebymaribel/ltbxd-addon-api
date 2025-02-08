import express from "express";
import util from "util";
const port = 3000

const server = express();

// const response = (res, data) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.setHeader("Content-Type", "application/json");
//   res.send(data);
// };

server.listen(port, () => console.log(`Server on. port ${port}`))