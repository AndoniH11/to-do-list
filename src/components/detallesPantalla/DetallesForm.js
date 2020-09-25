import React from 'react';
import { Context } from '../../context';
import DetallesAñadir from './DetallesAñadir'

class DetallesForm extends React.Component{

    static contextType = Context
    render(){
        const {nuevaTareaNombre, nuevaTareaFecha, nuevaTareaHora, nuevaTareaMensaje, handleChange} = this.context

        return(
            <div className='detalles-form'>
                <h3 className='titulo-tarea'>{nuevaTareaNombre}</h3>
                <form>
                    <input 
                        className='input-fecha' 
                        name='nuevaTareaFecha'
                        type='text' 
                        placeholder='Introduce la fecha...' 
                        value={nuevaTareaFecha}
                        onChange={(e) => handleChange(e)}/>
                    <input 
                        className='input-hora' 
                        name= 'nuevaTareaHora'
                        type='text' 
                        placeholder='Introduce la hora...'
                        value={nuevaTareaHora}
                        onChange={(e) => handleChange(e)}/>
                    <input 
                        className='mensaje' 
                        name = 'nuevaTareaMensaje'
                        type='text' 
                        placeholder='Añade detalles sobre la tarea...'
                        value={nuevaTareaMensaje}
                        onChange={(e) => handleChange(e)}/>
                </form>
                <DetallesAñadir />
            </div>
        )
    }
}

export default DetallesForm