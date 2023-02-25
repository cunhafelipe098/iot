import "reflect-metadata";
import { injectable } from "tsyringe";
import { DevicesRepository } from "../repositories/DevicesRepository";

interface IcreateUserDTO {
  device_id: string,
  name: string,
  nickname: string
}

@injectable()
class CreateDeviceService {
  async execute({ device_id, name, nickname}: IcreateUserDTO) {
    const repository = new DevicesRepository();
    const deviceAlreadyExists = await repository.findById(device_id);

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
