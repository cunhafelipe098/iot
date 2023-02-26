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

  async findById (id) {
    const device = await Device.findOne({
      _id: id
    }).lean();
    
    return device;
  }

  async deleteById (id) {
    const device = await Device.deleteOne({
      _id: id
    }).exec();
    return device;
  }

  async findByDevice_id (device_id) {
    const device = await Device.findOne({
      device_id
    }).exec();
    return device;
  }

  async listAll () {
    const device = await Device.find({}, "device_id name nickname").exec();
    return device;
  }
}

export { DevicesRepository }