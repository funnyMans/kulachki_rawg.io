import dbConnect from '../../dbConnect';
export class CRUDService {
  constructor(model) {
    dbConnect();
    this.model = model;
  }

  async create(newData) {
    const createdData = await this.model.create(newData);
    return createdData;
  }

  async read() {
    const allData = await this.model.find({});
    return allData;
  }

  async update(id, newData) {
    const updatedData = await this.model.findByIdAndUpdate(id, newData, {
      new: true,
    });
    return updatedData;
  }

  async delete(id) {
    const deletedData = await this.model.findByIdAndRemove(id);
    return deletedData;
  }
}
