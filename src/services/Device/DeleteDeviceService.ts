import { DevicesRepository } from "../../repositories/DevicesRepository";

class DeleteDeviceService {

  constructor (private devicesRepository: DevicesRepository) {}

  async execute(id: string) {
    const deviceExists = await this.devicesRepository.findById(id);
    
    if (deviceExists) {
      const device = await this.devicesRepository.deleteById(deviceExists._id); 
      return device;
    } else {
      return ;
    }
  }
}

export { DeleteDeviceService };