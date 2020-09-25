import React from 'react';
import DetallesTitulo from './DetallesTitulo';
import DetallesTarea from './DetallesTarea';
import { Context } from '../../context';

class DetallesShow extends React.Component {

    static contextType = Context

    render() {

        
        return (
            <div  className= {this.context.showDetallesTarea ? 'detalles-pantalla detalles-tarea-container' : 'oculto'}>
                <div className='detalles-container'>
                    <DetallesTitulo context={this.context}/>
                    <DetallesTarea context={this.context}/>
                </div>
            </div>
        )
    }
}

export default DetallesShow