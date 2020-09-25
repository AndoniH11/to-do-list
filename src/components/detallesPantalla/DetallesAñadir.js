import React from 'react';
import {FiEdit3} from 'react-icons/fi'
import {GiCoffeeCup} from 'react-icons/gi';
import {ImCalendar} from 'react-icons/im';
import {RiRepeatOneFill} from 'react-icons/ri'
import { Context } from '../../context';

class DetallesAñadir extends React.Component{

    static contextType = Context

    render(){

        const {handleSubmit} = this.context
        return(
            <div className='recordatorios-container'>
                <h4>AÑADIR A LISTA</h4>
                <div className='recordatorios'>
                    <button className='recordatorio-button' onClick={(e) => handleSubmit(e)}>
                        <FiEdit3 className='recordatorio-icon'/>Personal
                    </button>
                    <button className='recordatorio-button' onClick={(e) => handleSubmit(e)}>
                        <GiCoffeeCup className='recordatorio-icon'/>Trabajo
                    </button>
                    <button className='recordatorio-button' onClick={(e) => handleSubmit(e)}>
                        <ImCalendar className='recordatorio-icon'/>Prioridad
                    </button>
                    <button className='recordatorio-button' onClick={(e) => handleSubmit(e)}>
                        <RiRepeatOneFill className='recordatorio-icon'/>Otros
                    </button>
                </div>
            </div>
        )
    }
}

export default DetallesAñadir