import mongoose, {Document, Schema } from "mongoose";

type Device = Document & {
  device_id: string,
  name: string,
  nickname: string,
  connected: boolean,
  data: [{
    type: string,
    value: string,
    measure: string,
    dateTime: string,
  }],
  createdAt: string
};

const DeviceSchema = new Schema ({
  device_id: String,
  name: String,
  nickname: String,
  connected: Boolean,
  data: [{
    type: String,
    value: String,
    measure: String,
    dateTime: String,
  }],
  createdAt: String
}, 
{ typeKey: '$type' });

const Device = mongoose.model<Device>("Devices", DeviceSchema);

export { Device };