import React from 'react';
import DetallesRecordatorio from './DetallesRecordatorios';

const DetallesTarea = (props) => {

        const {context} = props
        
        return(
            <div className='detalles-tarea'>
                <h3 className='titulo-tarea titulo'>{context.detallesTareaNombre}</h3>
                <div className='cuando fecha'>{context.detallesTareaFecha}</div>
                <div className='cuando hora'>{context.detallesTareaHora}</div>
                <div className='clearfix'></div>
                <div className='mensaje-detalles'>{context.detallesTareaMensaje}</div>
                <DetallesRecordatorio/>
            </div>
        )
    
}

export default DetallesTarea