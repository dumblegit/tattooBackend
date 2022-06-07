import express from 'express';
const router = express.Router();
//Devuelve la imagen
router.get('/', function(req, res){
    
    res.sendFile(`./images/${img}` );
});
  module.exports = router;