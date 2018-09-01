import React, { Component } from 'react';

class Ticket extends Component {
    
    state = {
        nombre: 'Es mi amigo el perro',
        url: "https://t3.kn3.net/taringa/1/3/9/A/2/8/SheldorCooper/81A.jpg"
    }
    
    render(){
        return(
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={this.state.url}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            {this.state.nombre}
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
          </div>
        )
    }
}
export default 'Tarjeta';