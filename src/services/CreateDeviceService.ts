import { Device } from "../schemas/Device";
import "reflect-metadata";
import { injectable } from "tsyringe";
import { DevicesRepository } from "../repositories/DevicesRepository";

interface createUserDTO {
  device_id: string,
  name: string,
  nickname: string
}

@injectable()
class CreateDeviceService {
  async execute({ device_id, name, nickname}: createUserDTO) {
    const repository = new DevicesRepository();
    
    
    const deviceAlreadyExists = await Device.findOne({
      device_id,
    }).exec();

    if (deviceAlreadyExists) {
      const device = await repository.update(deviceAlreadyExists._id, {name, nickname}); 
      return device;
    } else {
      const device = await repository.create({
        device_id,
        name,
        nickname
      });
      return device;
    }
  }
}

export { CreateDeviceService };
