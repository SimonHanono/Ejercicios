const request = require('request');
// // Las promesas tienen 3 estados.
// // Pendiente, Rechazada, Resuelta
//
// preguntarse = false
//
// let promise = new Promise (function(resolve, reject){
//   resolve("Esta promesa se resolvio");
//   reject("esta promesa no se resolvio");
// })
// promise.then(function(respuesta){console.log(respuesta)});
// // promise.catch();
//
// let promesa = new Promise ((resolve, reject) => {reject("se resolvio")})
// console.log(promesa);
//
// setTimeout(function(){console.log("Pasaron 3 segundos")}, 3000);
//
// let ey = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Se resolvio la promesa")
// }, 3000);
// });
//
// console.log(ey);
//
// console.log("Se acabo");
//
//
//let promesa = new Promise((resolve, reject) =>{
//   let numero = 5;
//   if (numero%2==0){
//     resolve("si es par");
//   } else {reject("No es par")}
// });
//
// promesa
//   .then(function(mensaje){console.log(mensaje)})
//   .catch(mensaje => console.log(mensaje));
//
//
//
// //Ejemplo
// let promesaSWAPI = new Promise ((resolve, reject) => {
//   request.get("https://swapi.co/api/people/1/",
//       (error, response, body) =>{
//         response.statusCode == 200
//         ? resolve(JSON.parse(body))                 // ? = si se cumple
//         : reject(response.statusCode);              // : = si es diferente
//
//   });
// });
//
// promesaSWAPI
//   .then(json => console.log(JSON))
//   .catch(error => console.log(error));
//
//
// //Ejercicio
let promesa = new Promise (function(resolve, reject){
  request.get('https://swapi.co/api/planets/6/', function(error, response, body){
    let respuesta = JSON.parse(body);
    response.statusCode == 200
    ? resolve (respuesta.name + " " + respuesta.climate)
    : reject (error);

  }
)
})

promesa
  .then(correcto => console.log(correcto))
  .catch(error => console.log(error));
