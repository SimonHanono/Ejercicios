import React, { Component } from 'react';
import axios from 'axios';

class CrearArticulo extends Component {
    state = { 
        nombre: "",
        precio: 0,
        existencia: 0,
        descripcion: ""
     }
    
    onInputChange= (event) => {
        
        console.log("se");

        switch (event.target.id) {

            case 'input-texto':
                    this.setState({nombre:event.target.value});
                break;

            case 'input-precio':
                this.setState({precio:event.target.value});
                break;

            case 'input-existencia':
                this.setState({existencia:event.target.value});
                break;

            case 'input-descripcion':
                this.setState({descripcion:event.target.value});
                break;
        
            default:
                break;
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        let json = {
            nombre: this.state.nombre,
            precio: this.state.precio,
            existencia: this.state.existencia,
            descripcion: this.state.descripcion
        }
        axios.post('https://supermercado-la-chona.herokuapp.com/api/articulos/crear', json)
            .then(resultado => {
                console.log(resultado);
                alert("Exito Hermano");
            })
            .catch(error => console.log(error));
        }

    render() {
        return ( 
            <div className = "container">
            <form onSubmit={this.onSubmit}>
                {/* Nombre */}
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={this.onInputChange} id="input-texto" aria-describedby="emailHelp"/>
                </div>
                {/* Precio */}
                <div className="form-group">
                    <label>Precio</label>
                    <input type="number" className="form-control" onChange={this.onInputChange} id="input-precio" aria-describedby="emailHelp"/>
                </div>
                {/* Existencia */}
                <div className="form-group">
                    <label>Existencia</label>
                    <input type="number" className="form-control" onChange={this.onInputChange} id="input-existencia" aria-describedby="emailHelp"/>
                </div>
                {/* Descripcion */}
                <div className="form-group">
                    <label>Descripcion</label>
                    <input type="text" className="form-control" onChange={this.onInputChange} id="input-descripcion" aria-describedby="emailHelp"/>
                </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        );
    }
}
export default CrearArticulo;