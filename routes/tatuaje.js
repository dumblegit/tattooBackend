import express from 'express';
const router = express.Router();
import tatuaje from '../models/tatuaje';
const fs = require('fs');
var nombre;
const multer = require('multer');
import path from 'path';
import { route } from 'express/lib/application';
// Agregar un tatuaje
router.post('/agregar', async(req, res) => {
  const body = req.body;  
  try {
    const tatuajeDB = await tatuaje.create(body);
    res.status(200).json(tatuajeDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Listar un tatuaje
router.get('/listar/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const tatuajeDB = await tatuaje.findOne({_id});
    res.json(tatuajeDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Listar todos los tatuajes
router.get('/listar', async(req, res) => {
  try {
    const tatuajeDb = await tatuaje.find();
    res.json(tatuajeDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Eliminar un tatuaje
router.delete('/borrar/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const tatuajeDb = await tatuaje.findByIdAndDelete({_id});
    if(!tatuajeDb){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(tatuajeDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Actualizar un tatuaje
router.put('/actualizar/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const tatuajeDb = await tatuaje.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(tatuajeDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
//Mostrar imagenes de un tatuaje
router.get('/imagenes/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const tatuajeDB = await tatuaje.findOne({_id});
    res.json(tatuajeDB.imagenes);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
///Agregar una imagen
router.post('/agregarFoto', async(req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
        err.message = 'El archivo es demasiado pesado';
        return res.send(err);
    }
    res.send(nombre);
  })});
router.put('/nuevaImagen/:id', async(req, res) => {
  const _id = req.params.id;
  const imagen = req.body.imagen;
  try {
    const tatuajeDB = await tatuaje.findByIdAndUpdate(
      _id,
      {$push:{"imagenes": imagen}},
      {new: true});
    res.json(tatuajeDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
  });
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../images'),
  filename:  (req, file, cb) => {
      nombre=`${Date.now()}${file.originalname}`;
      cb(null, nombre);
  }
})
const uploadImage = multer({
  storage,
  limits: { fileSize: 10485760 }
}).single('imagen');
//Quitar una imagen
router.put('/borrarImagen/:id', async(req, res) => {
  const _id = req.params.id;
  const imagen = req.body.imagen;
  try {
    const tatuajeDB = await tatuaje.findByIdAndUpdate(
      _id,
      {$pull:{"imagenes": imagen}},
      {new: true});
    res.json(tatuajeDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
  try {
    fs.unlinkSync('./images/'+imagen);
    console.log('File removed')
  } catch(err) {
    console.error('Something wrong happened removing the file', err)
  } 
});
// Exportamos la configuración de express app
module.exports = router;
