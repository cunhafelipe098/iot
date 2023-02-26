import { DevicesRepository } from "../../repositories/DevicesRepository";

interface IupdateDeviceDTO {
  name: string,
  nickname: string
}

class UpdateDeviceService {

  constructor (private devicesRepository: DevicesRepository) {}

  async execute(id: string, { name, nickname }: IupdateDeviceDTO) {
    const deviceExists = await this.devicesRepository.findById(id);
    
    if (deviceExists) {
      const device = await this.devicesRepository.update(deviceExists._id, {name, nickname}); 
      return device;
    } else {
      return ;
    }
  }
}

export { UpdateDeviceService };