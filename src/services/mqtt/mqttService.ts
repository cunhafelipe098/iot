import mqtt from "mqtt";
import { deviceDataControler } from "../../main/DeviceDataMain";

const host = "127.0.0.1";
const port = "1883";
const topic = "proIOT/+";
const client  = mqtt.connect(`mqtt://${host}:${port}`);

client.on("connect", function () {
  console.log("connected");
  client.subscribe(topic, function (err) {
    if (!err) {
      client.publish("presence", "connect");
    }
  })
});

client.on("error", (err) => {
  console.log("Error: ", err);
  client.end();
});

client.on("reconnect", () => {
  console.log("Reconnecting...");
});

client.on("close", () => {
  console.log(`MQTT client disconnected`);
  client.end();
});

client.on("message", function (topic, message) {

  const device_id = topic.split('/')[1];
  try {
    let data = JSON.parse(message.toString('utf8'));
    deviceDataControler.handle(device_id, data);
  } catch (e) {
    console.log(e);
  }
});