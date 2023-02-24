import express from "express";
import { createServer } from "http";
import { Server, Socket } from 'socket.io';
import mongoose from "mongoose";

const app = express();

const server = createServer(app);

mongoose.connect("mongo://locallhost/protoiot");

const io = new Server(8080, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket: Socket) => {
  console.log('Client connected', socket.id);
});

app.get("/", (req, res) => {
  return res.json({
    menssage: "iot project"
  });
});

export {server, io}