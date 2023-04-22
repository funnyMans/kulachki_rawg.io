import mongoose from 'mongoose';

const PlanetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  orderFromSun: {
    type: Number,
  },
  hasRings: {
    type: Boolean,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [40, 'Species specified cannot be more than 40 characters'],
  },
  mainAtmosphere: {
    type: Array,
  },
  surfaceTemperatureC: {
    type: Object,
  },
});

export default mongoose.models.Planet || mongoose.model('Planet', PlanetSchema);
