import React from 'react';
import Tareas from './Tareas'
import { FaArrowUp } from 'react-icons/fa'
import { Context } from '../context';


class Main extends React.Component {

    static contextType = Context;

    render() {

        const { showAside, handleChange, handleClick, nuevaTareaNombre, tareas, lista } = this.context
        const contenidoFull = { width: '100%', paddingLeft: '5vw' }
        const listaCapitalized = lista.charAt(0).toUpperCase() + lista.slice(1)

        return (
            <div className='contenido' style={showAside ? null : contenidoFull}>
                <h2 className='saludo'>Buenos días</h2>
                <div className='personal tareas-container'>
                    <h3>{listaCapitalized}</h3>
                    <div className='tareas'>
                        {tareas.length > 0 ?
                            <Tareas/>:
                            <h4>Añade una tarea nueva!</h4>}
                    </div>
                    <div className='form-tareas'>
                        <input
                            className='form-tareas-input'
                            name='nuevaTareaNombre'
                            type='text'
                            placeholder='Pincha para añadir una tarea nueva'
                            onChange={(e) => handleChange(e)}
                            value={nuevaTareaNombre} />
                        <button
                            className='form-tareas-button'
                            onClick={() => handleClick()}>
                            <FaArrowUp className='arrow-up' />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main