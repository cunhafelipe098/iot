import { io } from "../../http"
import { Socket } from 'socket.io';


io.on('connection', (socket: Socket) => {
  console.log('webSocketService - Client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});