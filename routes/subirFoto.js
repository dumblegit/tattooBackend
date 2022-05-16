const multer = require('multer')
var nombre;

const storage = multer.diskStorage({
      
      destination: function (req,file,cb) {
        cb(null,'images')
      },
      filename: function (req,file,cb) {
        nombre=`${Date.now()}+${file.originalname}`;
        cb(null,nombre)
      }
    })

    const upload = multer({ storage: storage, limits: {fileSize: 1000000}})

    exports.upload = upload.single('fotoPerfil')
  
    exports.uploadFile = (req, res) => {
      res.send({data : nombre})
    }