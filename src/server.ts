import { server } from "./http"
import "./websocket/WebsocketService"
server.listen(5000, () => console.log("Running on port 5000"));