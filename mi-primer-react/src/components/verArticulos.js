import React, { Component } from 'react';
import Articulo from './articulo'
import Axios from 'axios';

class VerArticulos extends Component {
    state = {
        articulos: []
    };

    componentDidMount(){
        Axios
            .get("https://supermercado-la-chona.herokuapp.com/api/articulos")
            .then( 
                respuesta => {
                console.log(respuesta.data);
                this.setState({
                    articulos: respuesta.data})

                })
            .catch(error => console.log(error));
    };

    render(){
        return ( 
            <div>
                <h1>Ver Articulos</h1>
                {this.state.articulos.map(articulo => {
                    return <Articulo
                        key = {articulo._id}
                        nombre = {articulo.nombre}
                        precio = {articulo.precio}
                        existencia = {articulo.existencia}
                        descripcion = {articulo.descripcion}
                    />
                })};
            </div>
        );
    }
}

export default VerArticulos;