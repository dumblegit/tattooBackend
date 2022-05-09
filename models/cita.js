import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const citaSchema = new Schema({
      tatuador:{type: String},
      cliente:{type:String},
      fechaCita:{type: Date},
      precio:{type: Number},
      autorizado:{type: Boolean}
});

// Conversion a modelo
const cita = mongoose.model('cita', citaSchema);

export default cita;