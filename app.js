import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//Atributos de express
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({path:'./.env'});
//Creedenciales y conexion base de datos
const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.eswdh.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority`
const options = {useNewUrlParser: true};

// Prueba y confirmación de conexion
mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);
// Middleware
app.use(morgan('tiny'));
app.use(cors());
//Declaración tratamiento de imagenes
app.use(express.json({limit: '5mb'}));
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('images'));
//Declaración rutas
app.use('/', require('./routes/imagen'));
app.use('/tatuajes', require('./routes/tatuaje'));
app.use('/usuarios', require('./routes/usuario'));
app.use('/citas', require('./routes/cita'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
//Apertura de puerto y confirmación
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Server listening on port'+ app.get('puerto'));
});