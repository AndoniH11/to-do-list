import React from 'react';
import Tarea from './Tarea';
import { Context } from '../context';

class Tareas extends React.Component{

    static contextType = Context

    render(){

        const {lista, personal, trabajo, prioridad, otros, showDetalles, removeItem} = this.context

        return(
            <div className='tareas'>
                {lista === 'personal' ? 
                    personal.map((tarea) => {
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            showDetalles={showDetalles}
                            removeItem={removeItem} />
                    }) : lista === 'trabajo' ?
                    trabajo.map((tarea) => {
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            showDetalles={showDetalles}
                            removeItem={removeItem} />
                    }) : lista === 'prioridad' ? 
                    prioridad.map((tarea) => {
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            showDetalles={showDetalles}
                            removeItem={removeItem} />
                    }) : lista === 'otros' ? 
                    otros.map((tarea) => {
                        return <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            showDetalles={showDetalles}
                            removeItem={removeItem} />
                    }) : null }
            </div>
        )
    }
}

export default Tareas