import { DevicesRepository } from "../../repositories/DevicesRepository";

class FindByDeviceIdDeviceService {

  constructor (private devicesRepository: DevicesRepository) {}

  async execute(device_id: string) {
    const device = await this.devicesRepository.findByDevice_id(device_id);
    return device;
  }
}

export { FindByDeviceIdDeviceService };