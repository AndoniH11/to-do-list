import React from 'react';

import {FiEdit3} from 'react-icons/fi'
import {GiCoffeeCup} from 'react-icons/gi';
import {ImCalendar} from 'react-icons/im';
import {RiRepeatOneFill} from 'react-icons/ri'
import { Context } from '../../context';

class DetallesRecordatorios extends React.Component{

    static contextType = Context

    render(){

        const {closeDetalles} = this.context
        return(
            <div className='recordatorios-container'>
                <h4>RECORDARME EN</h4>
                <div className='recordatorios'>
                    <button className='recordatorio-button' onClick={() => closeDetalles()}>
                        <FiEdit3 className='recordatorio-icon'/>Mañana
                    </button>
                    <button className='recordatorio-button' onClick={() => closeDetalles()}>
                        <GiCoffeeCup className='recordatorio-icon'/>Una semana
                    </button>
                    <button className='recordatorio-button' onClick={() => closeDetalles()}>
                        <ImCalendar className='recordatorio-icon'/>2 semanas
                    </button>
                    <button className='recordatorio-button' onClick={() => closeDetalles()}>
                        <RiRepeatOneFill className='recordatorio-icon'/>1 mes
                    </button>
                </div>
            </div>
        )
    }
}

export default DetallesRecordatorios