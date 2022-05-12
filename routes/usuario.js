import express from 'express';
import { json } from 'express/lib/response';
const multer = require('multer');
const router = express.Router();
const upload = require('./subirFoto');
// importar el modelo usuario
import usuario from '../models/usuario';

// Agregar un usuario
router.post('/foto',
  upload.upload,
  upload.uploadFile
);
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
// Exportamos la configuración de express app
module.exports = router;