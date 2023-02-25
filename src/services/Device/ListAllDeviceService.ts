import { DevicesRepository } from "../../repositories/DevicesRepository";

class ListAllDeviceService {

  constructor (private devicesRepository: DevicesRepository) {}

  async execute() {
    const devices = await this.devicesRepository.listAll();
    
    return devices
  }
}

export { ListAllDeviceService };