import React from 'react';
import DetallesTitulo from './DetallesTitulo';
import DetallesForm from './DetallesForm';
import { Context } from '../../context';


class DetallesIntroducir extends React.Component {

    static contextType = Context
    render(){

        const {showDetallesIntroducir} = this.context
        return (
            <div className={showDetallesIntroducir ? 'detalles-pantalla detalles-introducir' : 'oculto'}>
                <div className='detalles-container'>
                    <DetallesTitulo context={this.context}/>
                    <DetallesForm />
                </div>
            </div>
        )
    }
    
}

export default DetallesIntroducir