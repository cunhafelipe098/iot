import { Device } from "../schemas/Device";


class DevicesRepository {

  async create ({ device_id, name, nickname }) {

    const device = await Device.create({
      device_id,
      name,
      nickname
    })
    return device;
  }

  async update(id: string, data) {
    const device = await Device.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: data,
      },
      {
        new: true,
      }
    );
    return device;
  }
}

export { DevicesRepository }