import React, { Component } from 'react';

class Articulo extends Component {

    constructor(props){
        super(props);

        console.log(props);

        const{nombre,precio,existencia,descripcion} = this.props;

        this.state = {
            nombre: nombre,
            precio: precio,
            existencia: existencia,
            descripcion: descripcion
        }
    }


    state = { 
        nombre: '',
        precio: 0,
        existencia: 0,
        descripcion: ''
    }

    // componentDidMount(){
    //     Axios
    //         .get("https://supermercado-la-chona.herokuapp.com/api/articulos")
    //         .then( respuesta => {
    //             console.log(respuesta.data);
    //             this.setState({
    //                 nombre: 'nombre',
    //                 precio: 'precio',
    //                 existencia: 'existencia',
    //                 descripcion: 'descripcion'
    //             })
    //         })
    //         .catch( error => console.log(error))
    // }

    render(){
        return (
            <div className="bg-info m-2">
                <h2>{this.state.nombre}}</h2>
                <p>{this.state.descripcion}</p>
            </div>
        );
    }
}

export default Articulo;