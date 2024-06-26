import express from "express";
import { createServer } from "http";
import { Server, Socket } from 'socket.io';
import mongoose from "mongoose";
import  { deviceRoutes } from "./routes/device.routes";
import cors from "cors";

/**********Connection Mongo********/
mongoose.connect("mongodb://localhost:27017/protoiot").catch((error)=>{
  console.log("mondb not connected");
  console.log(error);
});;


/**********Websocket***************/

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

/**********server HTTP*************/
const app = express();

const server = createServer(app);

app.get("/", (req, res) => {
  return res.json({
    menssage: "iot project"
  });
});
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(express.json());
app.use(cors(corsOptions));
app.use("/device", deviceRoutes);

export {server, io};