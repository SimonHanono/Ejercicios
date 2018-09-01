const express = require ('express');
const bodyParser = require('body-parser');
let app = express();
const {Ticket, Articulo} = require ('./client.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

// Articulo Post

app.post ('/api/v1/articulos', (req, res) => {
    let {nombre, precio, existencia, descripcion} = req.body;
    let nuevoArticulo = Articulo ({
    nombre,
    precio,
    existencia,
    descripcion
    });
    
    nuevoArticulo.save((error, resolve) => {
        if (error == null){
            res.status(201).send(articulo)
        }
        else {
            res.status(422).send(error)
        }
})
});



// Articulos Get
app.get('/api/v1/articulos/:id', (req, res) => {
    Articulo
        .find()
        .exec()
        .then(result => {res.status(200).send(result)})
        .catch(error => {res.status(404).send(error)})

    });

// Articulo Get
app.get('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.body
    Articulo
        .findById(id)
        .exec()
        .then(result => {res.status(200).send(result)})
        .catch(error => {res.status(404).send(error)})

    });

// Articulo Update
app.put('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.params;
    Articulo
        .findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true})
        .exec()
        .then(articulo => res.status(202).send(articulo))
        .catch(error => res.status(404).send(error));
});

// Articulo Borrar
app.delete('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.body
    Articulo
        .findByIdAndRemove(id)
        .exec()
        .then(result => {res.status(204).send(result)})
        .catch(error => {res.status(404).send(error)})

    });

// Ticket Create
app.post('/api/v1/articulos', (req, res) => {
    let {rfc, articulos} = req.body;
    let nuevoTicket = Ticket{
        rfc,
        articulos}

    nuevoTicket.save((error, ticketNuevo) => {
        error = null
        ? res.status(201).send(ticketNuevo)
        :res.send(error);
    })
});

// Ticket Get
app.get('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.body
    Articulo
        .findById(id)
        .populate('articulos')
        .exec()
        .then(result => {res.status(200).send(result)})
        .catch(error => {res.status(404).send(error)})

    });




// Obtener subtotal, iva, total
app.get('/api/v1/obtenerTotal/:id', (req,res) => {
    let {id} = req.params;
    let subtotoal = 0, iva = 0, total = 0;
    Ticket
        .findById(id)
        .populate('articulos')
        .exec()
        .then(ticket => {
            console.log(ticket);
            for(let i = 0, i < ticket.articulos.length, i++){
                subtotal += ticket.articulos[i].precio;
            };
            iva = (subtotal * 0.16);
            total = subtotal + iva;

            return Ticket.findByIdAndUpdate(ticket.id, {
                iva: iva,
                subtotal: subtotal,
                total: total}
                {new: true}
        })
        then
        })
        .catch();
});


app.listen(5050, () => {console.log("Corriendo en servidor")});