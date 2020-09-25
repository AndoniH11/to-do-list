import React from 'react';

const DetallesTitulo = (props) => {
    
    const {context} = props
        return(
                <div className='detalles-titulo'>
                    <h4>DETALLES</h4>
                    <div className='exit' onClick={() => context.closeDetalles()}>x</div>
                    <div className='clearfix'></div>
                </div>
        )
}

export default DetallesTitulo