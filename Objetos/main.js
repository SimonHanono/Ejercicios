// // Comment comand, shift, 7
// function miFuncion (){
//   console.console.log("hola");
// }
//
// var nombre =
// funcion miNuevaFuncion(nombre){
//   console.log("hola " + nombre)
// }
//
// miNuevaFuncion("Juan");
//
// let resultado = 0;
// function suma (num1, num2){
//   resultado= num1 + num2;
// }
// suma (3, 4)
// console.log(resultado)
// //Funcion anonima =>
// let hola = function(){
//   console.log("soy anonima");
// }
// console.log(hola());
//
//
// let esMayorDeEdad = (edad) => {
//   if (edad >= 18) {
//     return "eres mayor de edad"
//   }else {
//     return "No es mayor de edad"
//   }
// }
// console.log(esMayorDeEdad(19));
//
//Ejercicios

//1
function conversion (f){
  return f * 1.8 +32
}
console.log(conversion(10));

//2
function tabla (){
  for (num = 0; num < 10; num++){
    if (num % 4 == 0){
      console.log(num)
    }
    else {
      false
    }
  }
}

//3
lista = [3, 7, 12, 5, 7];
var sum = 0
function promedio (){
  for (var i = 0; i < lista.length; i++){
    sum += lista[i]
  }
  console.log(sum);
  var longitud = lista.length
  console.log(longitud);
  return sum/longitud;
}
console.log(promedio(sum));
//4
sueldo = [
  "a": 200,
  "b": 300,
  "c": 100,
  "d": 600,
  "e": 500,
  "f": 800,
  "g": 400,
  "h": 700
]
var pago =
function ganador () {
var ganador =
  for {}
}
console.log(ganador(sueldo[i]))

//5

//6
pares = []
i = 0
function escoger (){
  for (i < 20; i % 2 == 0; i++){
    pares.push(i)
  }
}
console.log(escoger(i));
console.log(pares);

//7

//8
function palindromo (a){
  var reverse = a.split("").reverse().join("")
  if (reverse === a)
  return true;
  return false;

console.lo(“plaindromo("racecar"))

// //OBJETOS
//
// let miObjeto = {};
// miObjeto = {
//   primera: "hola",
//   segunda: 10,
//   tercera: true
// }
//
// console.log(miObjeto.segunda);
//
// //Objeto2
//
// let persona = {
//   nombre: "Simon",
//   estatura: 1.74,
//   peso: "60 kg."
//   nacionalidad: "Mexicano",
//   edad: 17,
//   presentarse: function (){
//     return "Hola mi nombre es" + this.nombre
//   }
// }
// console.log(persona.presentarse());
