import { FindByDeviceIdDeviceService } from "../services/DeviceData/FindByDeviceIdDeviceService";
import { UpdateDeviceDataService } from "../services/DeviceData/UpdateDeviceDataService";

interface IdataDTO {
    type: string,
    value: string,
    measure: string,
    dateTime: string,
};

class DeviceDataControler {

  constructor (
    private findByDeviceIdDeviceService: FindByDeviceIdDeviceService,
    private updateDeviceDataService: UpdateDeviceDataService,
    private io: any
  ) {}

  async handle (device_id: string, data: IdataDTO) {
    
    const deviceExists = await this.findByDeviceIdDeviceService.execute(device_id);
    
    if (deviceExists) {
      const device = await this.updateDeviceDataService.execute(deviceExists._id, data);
      
      this.io.emit('message', {device_id, newData: data});
      return device;
    } else {
      //Could call a log routine in the DB
      // OR create an alert that there is a device sending msg but that is not registered
      console.log(`Device ${device_id} not found`);
      return ;
    }
  }
}

export { DeviceDataControler }