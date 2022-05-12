import express from 'express';
import { json } from 'express/lib/response';
const multer = require('multer');
const router = express.Router();

// importar el modelo usuario
import usuario from '../models/usuario';

// Agregar un usuario
router.post('/agregar', async(req, res) => {
  const body = req.body;  
  // console.log(body.fotoPerfil);
  const fichero = req.formdata;
  console.log(fichero);
  try {
    const usuarioDB = await usuario.create(body);
    // console.log(usuarioDB);
    agregarImagen(req, fichero);
    usuarioDB.fotoPerfil=body.file.filename;
    // console.log(usuarioDB);
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
function agregarImagen(req, file){

  //Filtro imagenes
  const fileFilter=function(req,file,cb){
  
    const allowedTypes=["image/jpg","image/jpeg","image/png",];
  
    if(!allowedTypes.includes(file.mimetype)){
  
      const error=new Error("Solo archivos tipo jpg, jpeg y png");
      error.code="LIMIT_FILE_TYPES";
      return cb(error,false);
    }
  
    cb(null,true);
  }
  
  //Subida a carpeta
  const storage=multer.diskStorage({
    destination:'./images',
    filename:(req,file,cb)=>{
      cb(null,file.originalname);
    }
  });
  const upload=multer({storage,fileFilter});
}
// Exportamos la configuración de express app
module.exports = router;