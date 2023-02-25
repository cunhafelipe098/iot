import { Router } from "express"
import { CreateDeviceService } from "../services/CreateDeviceService"
import { DevicesRepository } from "../repositories/DevicesRepository"

const deviceRoutes = Router();
const devicesRepository = new DevicesRepository()

deviceRoutes.post("/", (request, response) => {
  const { device_id, name, nickname } = request.body;

  const createDeviceService = new CreateDeviceService(devicesRepository);
  
  createDeviceService.execute({ device_id, name, nickname });

  return response.status(201).send();
});

export { deviceRoutes };