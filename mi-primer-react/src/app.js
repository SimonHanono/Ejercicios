import React, { Component } from 'react';
import VerArticulos from './components/verArticulos.js';
import { BrowserRouter, Route } from 'react-router-dom';
import CrearArticulo from './components/crearArticulo.js';
import Contador from './components/contador.js';

class App extends Component{

    state = {}

    render(){
        return(
            <BrowserRouter>
                <main>
                    <Route exact path = "/crearArticulo" component={CrearArticulo}/>
                    <Route exact path = "/verArticulos" component={VerArticulos}/>
                </main>
            </BrowserRouter>
        );
    }
}

export default App;