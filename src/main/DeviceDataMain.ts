import { DevicesRepository } from "../repositories/DevicesRepository";
import { DeviceDataControler } from "../Controllers/DeviceDataControler";

import { FindByDeviceIdDeviceService } from "../services/DeviceData/FindByDeviceIdDeviceService";
import { UpdateDeviceDataService } from "../services/DeviceData/UpdateDeviceDataService";

import { io } from "../http"

const devicesRepository = new DevicesRepository();

const findByDeviceIdDeviceService = new FindByDeviceIdDeviceService(devicesRepository);
const updateDeviceDataService = new UpdateDeviceDataService(devicesRepository);

const deviceDataControler = new DeviceDataControler(
  findByDeviceIdDeviceService,
  updateDeviceDataService,
  io
);

export { deviceDataControler }