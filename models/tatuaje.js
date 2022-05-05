import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tatuajeSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  tatuado:{type: Boolean, default: false},
  autor:{type: String},
  imagenes: Array({type: String})
});

// Conversion a modelo
const tatuaje = mongoose.model('tatuaje', tatuajeSchema);

export default tatuaje;