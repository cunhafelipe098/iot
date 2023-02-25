import { DevicesRepository } from "../../repositories/DevicesRepository";

class FindOneDeviceService {

  constructor (private devicesRepository: DevicesRepository) {}

  async execute(id: string) {
    const device = await this.devicesRepository.findById(id);
    return device;
  }
}

export { FindOneDeviceService };