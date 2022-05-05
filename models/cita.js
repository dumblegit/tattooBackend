import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const citaSchema = new Schema({
      idTatuaje:{type: String},
      tatuador:{type: String},
      fechaCita:{type: Date},
      comision:{type: Number},
      precio:{type: Number}
});

// Conversion a modelo
const cita = mongoose.model('cita', citaSchema);

export default cita;