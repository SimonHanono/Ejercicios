const mongoose = require ('mongoose');
let url = 'mongodb://Shimo:{password}@ds049641.mlab.com:49641/prueba'

mongoose.connect(url);

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

const programaSchema = new Schema({
  programa:ObjectId,
  description:String,
  duracion:String
});

const alumnoSchema = new Schema ({
  alumno:ObjectId,
  nombre:String,
  apellidos:String,
  edad:Number,
  programa:{
    type: Schema.ObjectId,
    ref: 'Programa'
}});

var Alumno = mongoose.model('Alumno', alumnoSchema);
var Programa = mongoose.model('Programa', programaSchema);

module.exports = {Alumno, Programa};
