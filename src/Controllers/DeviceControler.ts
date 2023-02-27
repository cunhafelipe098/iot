import { Response, Request } from "express";
import mongoose from "mongoose";
import { CreateDeviceService } from "../services/Device/CreateDeviceService"
import { UpdateDeviceService } from "../services/Device/UpdateDeviceService"
import { ListAllDeviceService } from "../services/Device/ListAllDeviceService"
import { DeleteDeviceService } from "../services/Device/DeleteDeviceService"
import { FindOneDeviceService } from "../services/Device/FindOneDeviceService"

class DeviceControler {

  constructor (
    private createDeviceService: CreateDeviceService,
    private updateDeviceService: UpdateDeviceService,
    private listAllDeviceService: ListAllDeviceService,
    private deleteDeviceService: DeleteDeviceService,
    private findOneDeviceService: FindOneDeviceService
  ) {}

  async create (request: Request, response: Response) {
    
    const { device_id, name, nickname } = request.body;

    const requiredFields = ['device_id', 'name', 'nickname']

    for (const field of requiredFields) {
      if (!request.body[field]) {
        response.status(400).send({ message: "Content can not be empty!" });
        return;
      }
    }

    const device = await this.createDeviceService.execute({ device_id, name, nickname });
  
    return response.status(201).send(device);
  }

  async update (request: Request, response: Response) {
    
    const { name, nickname } = request.body;
    const { id } = request.params;

    if(mongoose.isValidObjectId(id)) {
      const device = await this.updateDeviceService.execute(id, { name, nickname });
      return device ? response.status(200).json(device) : response.status(404).json({error: "Device not found!"});
    } else {
      return response.status(400).json({error: "Invalid ID"});
    }
  }

  async list (request: Request, response: Response) {
    
    const listOfDevices = await this.listAllDeviceService.execute();
    return response.status(200).json(listOfDevices);
  }

  async delete (request: Request, response: Response) {
    
    const { id } = request.params;
    
    if(mongoose.isValidObjectId(id)) {
      const device = await this.deleteDeviceService.execute(id);
      return device ? response.status(200).json(device) : response.status(404).json({error: "Device not found!"});
    } else {
      return response.status(400).json({error: "Invalid ID"});
    }
  }

  async finOne (request: Request, response: Response) {
    
    const { id } = request.params;
    
    if(mongoose.isValidObjectId(id)) {
      const device = await this.findOneDeviceService.execute(id);
      return device ? response.status(200).json(device) : response.status(404).json({error: "Device not found!"});
    } else {
      return response.status(400).json({error: "Invalid ID"});
    }
  }
}

export { DeviceControler }