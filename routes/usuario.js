import express from 'express';
import path from 'path';
import usuario from '../models/usuario';

const fs = require('fs');
const multer = require('multer');
const router = express.Router();

var nombre;

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

//Comprobar si un nickname existe
router.post('/comprobarUsuario',
async(req, res) => {
  const body = req.body; 
  try {
    if(await usuario.findOne({usuario : body.usuario})!=null){
      var existe={"existe" : true};
      res.json(existe);
    }else{
      var existe={"existe" : false};
      res.json(existe);
    }
    
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

//Inicio sesión
router.post('/inicioSesion',
async(req, res) => {
  const body = req.body; 
  try{
  const usuarioDB = await usuario.findOne({usuario : body.usuario})
  if(body.password==usuarioDB.password){
    var creedenciales={
      "id" : usuarioDB._id,
      "nombre" : usuarioDB.nombre,
      "tatuador" : usuarioDB.tatuador,
      "usuario" : usuarioDB.usuario
    }
    res.json(creedenciales);
  }else{
    res.json({"inicioFallido" : true});
  }
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Listar un usuario
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

// Listar todos los usuarios
router.get('/listar', async(req, res) => {
  try {
    const usuariosDb = await usuario.find();
    res.json(usuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Listar clientes
router.get('/clientes', async(req, res) => {
  try {
    const usuariosDb = await usuario.find({tatuador:false});
    res.json(usuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

//Listar tatuadores
router.get('/tatuadores', async(req, res) => {
  try {
    const usuariosDb = await usuario.find({tatuador:true});
    res.json(usuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Eliminar un usuario
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

// Actualizar un usuario
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

//Gestiona el nombre y ubicacion de la imagen
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../images'),
  filename:  (req, file, cb) => {
      nombre=`${Date.now()}${file.originalname}`;
      cb(null, nombre);
  }
})

//Limita y define donde se subirá una unica imagen
const uploadImage = multer({
  storage,
  limits: { fileSize: 4194304 }
}).single('fotoPerfil');

//Eliminar foto
router.put('/eliminarFoto/:id', async(req,res) => {
  const _id = req.params.id;
  const body = req.body;
  const foto = body.fotoPerfil;
  try {
    fs.unlinkSync('./images/'+foto);
  } catch(err) {
    console.error('Something wrong happened removing the file', err)
  } 
    try {
      body.fotoPerfil="";
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