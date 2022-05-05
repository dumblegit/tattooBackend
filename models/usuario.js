import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  tatuador:{type: Boolean, default: false},
  fechaNacimiento:{type: Date},
  fotoPerfil:{type: String},
  usuario:{type: String},
  password:{type: String},
  citas: Array({
      idTatuaje:{type: String},
      tatuador:{type: String},
      fechaCita:{type: Date},
      comision:{type: Number},
      precio:{type: Number}
  })
});

// Conversion a modelo
const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;