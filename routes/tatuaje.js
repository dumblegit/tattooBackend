import express from 'express';
const router = express.Router();
import tatuaje from '../models/tatuaje';
const fs = require('fs');
var nombre;
const multer = require('multer');
import path from 'path';
import usuario from '../models/usuario';
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
    const usuarioDB = await usuario.find();
    var usuarios=[];
    for (var i = 0; i<usuarioDB.length; i++) {
      if(usuarioDB[i].tatuador){
        usuarios.push({"_id" : usuarioDB[i]._id, "nombre" : usuarioDB[i].nombre})
      }
    }
    res.json({ "tatuajes" : tatuajeDb, "nombres" : usuarios});
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
  limits: { fileSize: 4194304 }
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
  } catch(err) {
    console.error('Something wrong happened removing the file', err)
  } 
});

/*Datos para mostrar a la hora de pedir una cita */
router.get('/datosCita', async(req, res) => {
  try {
    const tatuajeAux = req.query.t
    const autorAux = req.query.a
    const tattoo = await tatuaje.findOne({_id : tatuajeAux});
    const autor = await usuario.findOne({_id : autorAux});
    res.json({"tatuaje" : tattoo.nombre,
              "precio" : tattoo.precio,
              "autor" :  autor.nombre});
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Exportamos la configuración de express app
module.exports = router;
