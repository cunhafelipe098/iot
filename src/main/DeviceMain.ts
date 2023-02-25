import { DevicesRepository } from "../repositories/DevicesRepository";
import { DeviceControler } from "../Controllers/DeviceControler";

import { CreateDeviceService } from "../services/Device/CreateDeviceService";
import { UpdateDeviceService } from "../services/Device/UpdateDeviceService";
import { ListAllDeviceService } from "../services/Device/ListAllDeviceService";
import { DeleteDeviceService } from "../services/Device/DeleteDeviceService";
import { FindOneDeviceService } from "../services/Device/FindOneDeviceService";


const devicesRepository = new DevicesRepository();

const createDeviceService = new CreateDeviceService(devicesRepository);
const updateDeviceService = new UpdateDeviceService(devicesRepository);
const listAllDeviceService = new ListAllDeviceService(devicesRepository);
const deleteDeviceService = new DeleteDeviceService(devicesRepository);
const findOneDeviceService = new FindOneDeviceService(devicesRepository);

const deviceControler = new DeviceControler(
  createDeviceService,
  updateDeviceService,
  listAllDeviceService,
  deleteDeviceService,
  findOneDeviceService
);

export { deviceControler }