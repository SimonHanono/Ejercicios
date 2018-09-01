const request = require ('request');

let promesa = new Promise  
request.get("http://taco-randomizer.herokuapp.com/10/", (error, response, body) => {
  let respuesta = JSON.parse(body).condiment.name;
  console.log(respuesta);
});



const URL = "http://taco-randomizer.herokuapp.com/random/"
let hello = {
  "ingredientes":["queso","catsup"]
}
request.post({url:URL, form:hello}, (error, response, body) => {
  console.log(JSON.parse(body));

})
