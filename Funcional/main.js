// let triple = function (numero){
//   return numero * 3
// }
// console.log(triple(3));
//
// let final = triple;
// console.log(final(6));
//
// //Funcion de Orden Superior
// //Funciones callback
//
// let funcionDeOrdenSuperior = function(callback){
//   console.log("Hola soy la funcion de orden superior");
//   callback();
// }
//
// let funcionCallBack = function(){
//   console.log("Hola soy la funcion de callback");
// }
//
// funcionDeOrdenSuperior(funcionCallBack);
//
// // Se ejecuta primero la funcion superior
// let ordenSuperior = function(saludar){
//   console.log("Hola soy la funcion de orden superior")
//   saludar();
// }
//
// ordenSuperior(function(){
//   console.log("Segunda funcion");
// });
//
// //Arrow Function
// let miFuncion = (callback) => {
//   console.log("Soy la funcion superior");
//   callback();
// }
// console.log( miFuncion(() => {
//   console.log("Soy la funcion callback con arrowfunctions")
// }));
//
// //Ejercicio
// let saluda = function (mensaje, hello){
//   hello(mensaje);
// }
//
// let mayusculas = function (mensaje){
//   return console.log(mensaje.toUpperCase());
// }
//
// let minusculas = function (mensaje){
//   return console.log(mensaje.toLowerCase());
// }
//
// saluda("Me Gusta Comer", mayusculas());
//
// //Filter
// let animales = [
//   {nombre: "Heladio", especie: "tortuga"},
//   {nombre: "Jose", especie: "tigre"},
//   {nombre: "Carlos", especie: "cuyo"},
//   {nombre: "Fabiola", especie: "tortuga"},
//   {nombre: "Mauricio", especie: "cuyo"},
//   {nombre: "Rogelio", especie: "pato"}
// ]
//
// let cuyos = [];
//
// for (let i=0, i<animales.length, i++){
//   if (animales[i].especie == "cuyo"){
//     cuyos.push(animales[1])
//   }
// }
//
// console.log(cuyos);
//
// cuyos = animales.filter(function(animal){
//   return animal.especie == "cuyo";
// });
//
// console.log(cuyos);
//
// //Map
// let animales = [
//   {nombre: "Heladio", especie: "tortuga"},
//   {nombre: "Jose", especie: "tigre"},
//   {nombre: "Carlos", especie: "cuyo"},
//   {nombre: "Fabiola", especie: "tortuga"},
//   {nombre: "Mauricio", especie: "cuyo"},
//   {nombre: "Rogelio", especie: "pato"}
// ];
// let patos = [];
// patos = animales.map(function(animal){
//   return animal.nombre;
// });
// console.log(patos);
//
// //Ejercicio1
// let funcionSuperior = function (entrada, salida){
//   salida();
// }
// let entrada = ("Hola como estas")
//
// function hello (){
//   let separado = entrada.split(" "),
//   console.log(separado);
// }
// hello(entrada);
//
//Ejercicio2
let arreglo = [120, 80, 200, 100];
arreglo = arreglo.filter(function(){
  for(i=0, i<lista.length, 1++){
    if (i<120){
      false
    }
    else (i>120){
      true
    }
  }
})
// //Ejercicio3
// let lista = [1, 3, 5, 7, 9]
// let resultado = map.lista(function(num){
//
// })
