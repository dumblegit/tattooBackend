import express from 'express';
import cita from '../models/cita';
const router = express.Router();


// Agregar una cita
router.post('/agregar', async(req, res) => {
  const body = req.body;  
  try {
    const citaDB = await cita.create(body);
    res.status(200).json(citaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Lista una cita
router.get('/listar/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const citaDB = await cita.findOne({_id});
    res.json(citaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Lista todas las citas
router.get('/listar', async(req, res) => {
  try {
    const citaDb = await cita.find();
    res.json(citaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

//Todas las citas de un usuario
router.get('/usuario/:id', async(req, res) => {
  try {
    const cliente = req.params.id;
    const citasDb = await cita.find({cliente: cliente});
    res.json(citasDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Eliminar un cita
router.delete('/borrar/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const citaDb = await cita.findByIdAndDelete({_id});
    if(!citaDb){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(citaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Actualizar una cita
router.put('/actualizar/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const citaDb = await cita.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(citaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;