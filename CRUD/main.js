// Peticiones POST

let request = require ('request');
const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com"

// let crearUsuario = new Promise ((resolve, reject) =>{
//
//   let URI = "/api/v1/authors/";
//   let URL = URL_BASE + URI;
//   let jsonSend = {
//     "name":"Adolfo",
//     "last_name": "Perez",
//     "nacionalidad": "MX",
//     "biography": "Es buena onda",
//     "gender": "M",
//     "age": "30"
//   }
//
//   request.post( {url:URL, formData:jsonSend}, (error, response, body) =>{
//     response.statusCode == 201
//     ? resolve (JSON.parse(body))
//     : reject (JSON.parse(body));
//   });
// });
//
// crearUsuario
//   .then(respuesta => console.log(respuesta))
//   .catch(error => console.log(error));
//
// Ejercicios
//
// let ejercicioGet = new Promise ((resolve, reject) => {
//   request.get ("https://goodreads-devf-aaron.herokuapp.com//api/v1/authors/", (error, response, body) => {
//     let respuesta = JSON.parse(body)
//     resolve (respuesta)
//     reject(response.statusCode);
//   }
// )
// });
//
// ejercicioGet
//   .then(respuesta => console.log(repsuesta))
//   .catch(error => console.log(error));
//
// let ejercicioPut = new Promise ((resolve, reject) => {
//     let URI = "/api/v1/books/{1057}/";
//     let URL = URL_BASE + URI;
//     let jsonSend ={
//       "name":"Jaime",
//       "last_name": "Perez",
//       "nacionalidad": "MX",
//       "biography": "Es buena onda",
//       "gender": "M",
//       "age": "30"
//     }
//     request.put (url:URL, formData:jsonSend, (error, response, body) =>{
//       response.statusCode == 201
//       ? resolve (JSON.parse(body))
//       : reject (response.statusCode);
// })
// );
//
// ejercicioPut
//   .then (respuesta => console.log(respuesta))
//   .catch (error => console.log(error));
//
//   let ejercicioDelete = new Promise ((resolve, reject,) => {
//     let id = /api/v1/books/{500}/
//     request.delete("https://goodreads-devf-aaron.herokuapp.com"+id, )
//   })
