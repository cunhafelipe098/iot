import { DevicesRepository } from "../../repositories/DevicesRepository";

interface IdataDeviceDTO {
    type: string,
    value: string,
    measure: string,
    dateTime: string,
};

class UpdateDeviceDataService {

  constructor (private devicesRepository: DevicesRepository) {}

  async execute(id: string, data : IdataDeviceDTO) {
    const deviceExists = await this.devicesRepository.findById(id);
    
    if (deviceExists) {
      let deviceDataUpdate = Object.assign({},
        {
          ...deviceExists, 
          data: deviceExists.data.concat(data)
        }
      );
      
      const device = await this.devicesRepository.update(deviceExists._id, deviceDataUpdate);
      return device;
    } else {
      return ;
    }
  }
}

export { UpdateDeviceDataService };