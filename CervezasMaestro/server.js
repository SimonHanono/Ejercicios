const bodyParser = require('body-parser');
const express = require ('express');

const{
    Cerveza,
    Estilo
} = require ('./client.js');

var app = express ();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Im on")
});

app.post('/api/v1/estilo', (req, res) => {
    const {nombre, descripcion} = req.body;
    let nuevoEstilo = Estilo({
        nombre,
        descripcion
    })
    nuevoEstilo.save((err, estilo) => {
        res
            .status(201)
            .send(estilo)
    })
});

app.post('/api/v1/cerveza', (req, res) => {
    const {nombre, pais, porcentaje, cantidad, estilo} = req.body;
    let nuevaCerveza = Cerveza({
        nombre,
        pais,
        porcentaje,
        cantidad,
        estilo
    });
    nuevaCerveza.save((err, cerveza) => {
        res
            .status(201)
            .send(cerrveza);

    })
});

app.get('/api/v1/cerveza', (req, res)=>{
    Cerveza.find({}, (err, cervezas)=>{
        Estilo.populate(cervezas, {path:'estilo'}, (err, res)=>{
            res
                .status(200)
                .send(result);
        })
    })
});

app.listen(8000, () => console.log("Server on port 8000"));