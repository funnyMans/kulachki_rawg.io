import dbConnect from '../../dbConnect';
import { CRUDService } from '../CRUD';

const { default: Planet } = require('../../models/Planet');

class PlanetsService extends CRUDService {
  constructor() {
    super(Planet);
  }
  async findById(id) {
    await dbConnect();
    const foundData = await this.model.findOne({ id });
    return foundData;
  }

  async findByName(name) {
    await dbConnect();
    const foundData = await this.model.findOne({ name });
    return foundData;
  }

  async findByOrderFromSun(order) {
    await dbConnect();
    const foundData = await this.model.find({ orderFromSun: order });
    return foundData;
  }
}

export const PlanetsServiceInstance = new PlanetsService();
