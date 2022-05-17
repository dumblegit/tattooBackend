import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const imagenSchema = new Schema({
  img: {type: String},
});

// Conversion a modelo
const imagen = mongoose.model('imagen', imagenSchema);

export default imagen;