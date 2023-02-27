const mqtt = require("mqtt");
const client  = mqtt.connect(`mqtt://127.0.0.1:1883`)

client.on("connect", function () {
  client.subscribe("pro/2", function (err) {
    if (!err) {
      client.publish("presence", "connect")
    }
  })
})

client.on("message", function (topic, message) {
  console.log(topic, message.toString())
  // client.end()
})

let count = 0;
setInterval((s) => {
  
  count+=10

  client.publish("proIOT/123",`[{"type": "speed","value": "${count}","measure": "km/h","dateTime": "${Date.now()}"}]`, {
    qos: 0,
    retain: false,
  });
  console.log("msg enviada");
}, 7000)