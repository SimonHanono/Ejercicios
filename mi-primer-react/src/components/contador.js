import React, { Component } from 'react';

class Contador extends Component {
    
    state = {
        conteo: 0
    }

    formatearConteo(){
        const {conteo} = this.state
        return this.state.conteo === 0
        ? 'none'
        : conteo
    }

    insertarClassesSpan(){
        const {conteo} = this.state;
        let spanClass = "mr-2 badge badge-"
        return this.state.conteo === 0
        ? spanClass += 'warning'
        : spanClass += 'primary'
    }

    incrementarConteo= () => {
        console.log("funcionaaaaa");
        this.setState({
            conteo: this.state.conteo + 1
        });
    }

    reducirConteo = () => {
        console.log("Se borro");
        this.setState({
            conteo: this.state.conteo -1
        });
    }

    render(){
        return(
            <div className = "m-4">
                
                {/* titulo de contador */}
                <h3>{this.props.children}</h3>

                {/* Contador */}
                <span className = {this.insertarClassesSpan()}>
                    {this.formatearConteo()}
                </span>
                
                {/* Incrementar Contador */}
                <button onClick = {this.incrementarConteo} className = "btn btn primary-sm">
                    increamentar
                </button>

                {/* Eliminar contador */}
                <button onClick = {this.reducirConteo} className="tn btn-danger btn-sm ml-2">Borrar</button>
            </div>
        );
    }
}
export default Contador;