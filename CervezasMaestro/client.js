const mongoose = require ('mongoose');
let url = 'mongodb://Shimo:abc123@ds221292.mlab.com:21292/cervezas'

mongoose.connect(url);

var Schema = mongoose.Schema;
var ObjectID = Schema.ObjectID;

const estiloSchema = new Schema ({
    estilo: ObjectID,
    nombre: String,
    descripcion: String
});

const cervezaSchema = new Schema ({
    cerveza: ObjectID,
    nombre: String,
    pais: String,
    porcentaje: Number,
    cantidad: Number,
    estilo: {
        type:Schema.ObjectID,
        ref: 'Estilo'
    }
});

var Cerveza = mongoose.model ('Cerveza', cervezaSchema);
<<<<<<< HEAD
var Estilo = mongoose.model ('Estilo', estiloSchema);
=======
var Estilo = mongoose.model ('Estilo', estiloSchema);
>>>>>>> parent of dda6bbb... aa
