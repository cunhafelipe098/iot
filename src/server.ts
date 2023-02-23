import express from "express";
import { createServer } from "http";
import { Server } from "socket.io"
const app = express();

const server = createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket", socket.id);
});

app.get("/", (req, res) => {
  return res.json({
    menssage: "iot project"
  });
});

server.listen(3000, () => console.log("Running on port 3000"));