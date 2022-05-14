import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  tatuador:{type: Boolean, default: false},
  fechaNacimiento:{type: Date},
  fotoPerfil:{type: String},
  usuario:{type: String},
  password:{type: String},
  aboutYou:{type: String}
});

// Conversion a modelo
const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;