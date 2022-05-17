import express from 'express';
import { json } from 'express/lib/response';
import path from 'path';
var nombre;
const multer = require('multer');
const router = express.Router();
// importar el modelo usuario
import usuario from '../models/usuario';


// Agregar un usuario
router.post('/agregar',
async(req, res) => {
  const body = req.body; 
  try {
    const usuarioDB = await usuario.create(body);
    res.status(200).json(usuarioDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Get con parámetros
router.get('/listar/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const usuarioDB = await usuario.findOne({_id});
    res.json(usuarioDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los documentos
router.get('/listar', async(req, res) => {
  try {
    const usuarioDb = await usuario.find();
    res.json(usuarioDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Delete eliminar un usuario
router.delete('/borrar/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const usuarioDb = await usuario.findByIdAndDelete({_id});
    if(!usuarioDb){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(usuarioDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Put actualizar un usuario
router.put('/actualizar/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const usuarioDb = await usuario.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(usuarioDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

//Agregar foto
router.post('/agregarFoto', (req, res) => {
  uploadImage(req, res, (err) => {
      if (err) {
          err.message = 'El archivo es demasiado pesado';
          return res.send(err);
      }
      res.send(nombre);
  });
});
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../images'),
  filename:  (req, file, cb) => {
      nombre=`${Date.now()}+${file.originalname}`;
      cb(null, nombre);
  }
})
const uploadImage = multer({
  storage,
  limits: { fileSize: 1048576 }
}).single('fotoPerfil');

//Eliminar foto

router.put('/eliminarFoto/:id', async(req,res) => {
  const _id = req.params.id;
  const body = req.body;
  body.fotoPerfil="";
  try {
    const usuarioDb = await usuario.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(usuarioDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
})
// Exportamos la configuración de express app
module.exports = router;