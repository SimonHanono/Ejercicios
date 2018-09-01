//
// //Peticion 1
const request = require('request');
//
// request.get('http://pokeapi.co/api/v2/pokemon/100/', (error, response, body) => {
//   let respuesta = JSON.parse(body);
//   console.log(respuesta);
// });

// //Peticion 2
// request.get('http://openlibrary.org/search.json?q=i+robot', (error, response, body) => {
//   let respuesta = JSON.parse(body);
//   respuesta = respuesta.docs
//   for (i=0; i<respuesta.length; i++){
//     console.log(respuesta[i].author_name);
//   }
// });
//// //Resolucion Maestro
// let urlbase = 'http://openlibrary.org/search.json?q=i+robot';
//
// let buscarAutoresPorLibro = (libro) => {
//   let URL = urlbase + libro;
//   let autores = [];
//
//   request.get(URL, (error, response, body) => {
//     if (response.statusCode = 200)
//     {
//
//       let libros = (JSON.parse(body).docs)
//       console.log(libros)
//
//       let autores = libros.map (libro => { return });
//       autores.map (autor => console.log(autor));
//     }
//     else console.log(error);
//   }
// }
// //Peticion 3
// request.get('http://openlibrary.org/search.json?q=i+robot', (error, response, body) => {
//   let respuesta = JSON.parse(body);
//   respuesta = respuesta.docs
//   for(let i=0; i<respuesta.length; i++){
//     if (respuesta[i].author_name == "Isaac Asimov");
//     console.log(respuesta[i].title_suggest);
//   }
// });
//
// //Peticion 4
// request.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i', (error, response, body) => {
//   let respuesta = JSON.parse(body);
//   respuesta = respuesta.near_earth_objects
//   respuesta = Object.keys()
//   console.log(respuesta);
// });

//Peticion NASA

URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-08-01&end_date=2018-08-08&api_key=g63gzjoVjSsNgSlG5WMICBoFf4jGG8LqFYXXHkOK'

request.get()

// //Peticion 6 con Maestro
//
// let obtenerPokemones = () => {
//   request.get('https://pokeapi.co/api/v2/pokemon?limit=10', (error, response, body) => {
//     if (response.statusCode == 200){
//
//       let arregloPokemones = JSON.parse(body).result;
//
//       arregloPokemones.map(pokemon => {
//
//         request.get(pokemon.url, (error, response,body) => {
//
//           let miPokemon = JSON.parse(body);
//           console.log(miPokemon);
//         })
//       })
//     }
//     else{
//       console.log(response.statusCode);
//     }
//   })
// }
