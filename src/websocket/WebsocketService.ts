import { io } from "../http"
import { Socket } from 'socket.io';


io.on('connection', (socket: Socket) => {
  console.log('webSocketService - Client connected');
  io.emit('message', {text: "atualiza"});
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('message', (data: any) => {
    console.log('Received message:', data);
    // Broadcast the message to all connected clients
    io.emit('message', {text: "atualiza"});
  });
});