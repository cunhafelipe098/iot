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

  constructor (private devicesRepository: DevicesRepository) {}

  async execute({ device_id, name, nickname }: IcreateUserDTO) {
    const deviceAlreadyExists = await this.devicesRepository.findById(device_id);

    if (deviceAlreadyExists) {
      const device = await this.devicesRepository.update(deviceAlreadyExists._id, {name, nickname}); 
      return device;
    } else {
      const device = await this.devicesRepository.create({
        device_id,
        name,
        nickname
      });
      return device;
    }
  }
}

export { CreateDeviceService };
