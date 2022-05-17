import express from 'express';
import imagen from '../models/imagen';
const router = express.Router();
router.get('/:img', function(req, res){
    res.sendFile( __dirname+`/images/${img}` );
});
  module.exports = router;