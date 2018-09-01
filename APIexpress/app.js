const express = require('express');
const bodyParser = require('body-parser');
var app = express();

// Params /
// Query ?,&

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/usuarios', function (req, res) {
  res.send('te devuelve la lista de usuarios');
});

app.post('/usuarios', (req, res) => {
  let nuevoUsuario = req.body;
  console.log(nuevoUsuario);
  res
    .status(201) //determinar el statusCode
    .send(nuevoUsuario);
});

app.put('/usuarios/:uid/', (request, response) => {
  console.log(request.params);
  response
    .status(200)
    .send("Usuario actualizado");
});

app.delete('/usuarios/:id/', (req, res) => {
  console.log(req.params);
  res
    .status(204)
    .send(req.params);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
