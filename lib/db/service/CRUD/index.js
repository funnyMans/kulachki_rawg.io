import dbConnect from '../../dbConnect';
export class CRUDService {
  constructor(model) {
    this.model = model;
  }

  async create(newData) {
    await dbConnect();
    const createdData = await this.model.create(newData);
    return createdData;
  }

  async read() {
    await dbConnect();
    const allData = await this.model.find({});
    return allData;
  }

  async update(id, newData) {
    await dbConnect();
    const updatedData = await this.model.findByIdAndUpdate(id, newData, {
      new: true,
    });
    return updatedData;
  }

  async delete(id) {
    await dbConnect();
    const deletedData = await this.model.findByIdAndRemove(id);
    return deletedData;
  }
}
