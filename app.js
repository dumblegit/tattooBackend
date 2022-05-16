import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';


const app = express();
const mongoose = require('mongoose');




const uri = 'mongodb+srv://chema_roberto:efRtkTvqXtLkb2Dc@cluster0.eswdh.mongodb.net/tattoodb?retryWrites=true&w=majority';
const options = {useNewUrlParser: true};

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a DB') },
  /** handle initial connection error */
  err => { console.log(err) }
);
// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json({limit: '5mb'}));
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/tatuajes', require('./routes/tatuaje'));
app.use('/usuarios', require('./routes/usuario'));
app.use('/citas', require('./routes/cita'));
// Rutas

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});