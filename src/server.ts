import { server } from "./http";
import "./services/websocket/WebsocketService";
import "./services/mqtt/mqttService";

server.listen(5000, () => console.log("Running on port 5000"));