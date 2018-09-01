const mongoose = require ('mongoose');
let DB_URL = 'mongodb://<Shimo>:<abc123>@ds227352.mlab.com:27352/thighs'

mongoose.connect(DB_URL, {useNewUrlParser: true});

var Schema = mongoose.Schema
var ObjectID = Schema.ObjectID

const articuloSchema = new Schema({
    articulo:ObjectID,
    nombre: String,
    precio: Number,
    existencia: Number,
    descripcion: String,
    });

const ticketSchema = new Schema({
    ticket: ObjectID,
    rfc: String,
    subtotal: {type: Number, default:0},
    iva: {type: Number, default:0},
    total: {type: Number, default:0},
    articulos: [{type: ObjectID, ref: 'Articulo'}]
    });

var Ticket = mongoose.model('Ticket', ticketSchema);
var Articulo = mongoose.model('Articulo', articulo.Schema);

module.exports = {Articulo, Ticket};