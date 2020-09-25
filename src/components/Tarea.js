import React from 'react';
import { FaTrash } from 'react-icons/fa'

const Tarea = (props) => {

    const { tarea, fecha, hora, detalles, id} = props.tarea
    return (
        <div className='tarea'>
            <div className='checkbox'></div>
            <p className='text' onClick={() => props.showDetalles(tarea, fecha, hora, detalles)}>{tarea}</p>
            <FaTrash className='trash' onClick={() => props.removeItem(id)}/>
        </div>
    )

}

export default Tarea