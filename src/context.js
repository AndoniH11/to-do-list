import React from 'react';

const Context = React.createContext();

class ContextProvider extends React.Component{

    state = {
        tareas:[],
        lista: 'personal',
        personal: [],
        trabajo: [],
        prioridad: [],
        otros: [],
        showAside: false,
        showAsideList: true,
        showNotifications: false,
        showSettings: false,
        showDetallesIntroducir: false,
        showDetallesTarea: false,
        nuevaTareaNombre: '',
        nuevaTareaFecha: '',
        nuevaTareaHora: '',
        nuevaTareaMensaje: '',
        detallesTareaNombre: '',
        detallesTareaFecha: '',
        detallesTareaHora: '',
        detallesTareaMensaje: '',
    }

    toggleAside = () => {
        this.setState({
            showAside: !this.state.showAside,
            showAsideList: true
        })
    }

    toggleNotifications = () => {
        this.setState({
            showNotifications: !this.state.showNotifications, 
            showSettings: false
        })
    }

    toggleSettings = () => {
        this.setState({
            showSettings: !this.state.showSettings,
            showNotifications: false
        })
    }

    toggleAsideList = () => {
        this.setState({
            showAsideList: !this.state.showAsideList
        })
    }

    showDetalles = (tarea, fecha, hora, detalles) => {
        this.setState({
            showDetallesTarea: true,
            detallesTareaNombre: tarea,
            detallesTareaFecha: fecha,
            detallesTareaHora: hora,
            detallesTareaMensaje: detalles
        })
    }

    closeDetalles = () => {
        this.setState({
            showDetallesTarea: false,
            showDetallesIntroducir: false,
            nuevaTareaNombre: ''
        })
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        if(this.state.nuevaTareaNombre.length > 0){
            this.setState({
                showDetallesIntroducir: true
            })
        }
    }

    handleSubmit = (e) => {
        const {tareas, nuevaTareaNombre, nuevaTareaFecha, nuevaTareaHora, nuevaTareaMensaje, personal, trabajo, prioridad, otros} = this.state
    
        const name = e.target.innerText.toLowerCase()
        
        if(nuevaTareaFecha.length > 0 && nuevaTareaHora.length > 0 ){

            const nuevaTarea = {
                id: (tareas.length +1),
                tarea: nuevaTareaNombre,
                fecha: nuevaTareaFecha,
                hora: nuevaTareaHora,
                detalles: nuevaTareaMensaje,
                name: name
            }

            if(name === 'personal'){
                this.setState({
                    personal: [...personal, nuevaTarea]
                })
            }else if(name === 'trabajo'){
                this.setState({
                    trabajo: [...trabajo, nuevaTarea]
                })
            }else if(name === 'prioridad'){
                this.setState({
                    prioridad: [...prioridad, nuevaTarea]
                })
            }else if(name === 'otros'){
                this.setState({
                    otros: [...otros, nuevaTarea]
                })
            }

            this.setState({
                tareas: [...tareas, nuevaTarea],
                nuevaTareaNombre: '',
                nuevaTareaFecha: '',
                nuevaTareaHora: '',
                nuevaTareaMensaje: '',
                showDetallesIntroducir: false
            })
        }
        
        this.closeDetalles()
    }

    setLista = (e) => {
        const value = e.target.innerText.toLowerCase()
        this.setState({
            lista: value,
            showAside: false,
        })
    }

    removeItem = (id) =>{
        let tempTareas = [...this.state.tareas]
        tempTareas = tempTareas.filter((tarea) => tarea.id !== id)
        let tempPersonal = tempTareas.filter((tarea) => tarea.name === 'personal');
        let tempTrabajo = tempTareas.filter((tarea) => tarea.name === 'trabajo')
        let tempPrioridad = tempTareas.filter((tarea) => tarea.name === 'prioridad')
        let tempOtros = tempTareas.filter((tarea) => tarea.name === 'otros')
        this.setState({
            tareas: tempTareas,
            personal: tempPersonal,
            trabajo: tempTrabajo,
            prioridad: tempPrioridad,
            otros: tempOtros
        })
    }

    render(){
        return(
            <Context.Provider value={{
                ...this.state,
                toggleAside: this.toggleAside,
                toggleNotifications: this.toggleNotifications,
                toggleSettings: this.toggleSettings,
                handleChange: this.handleChange,
                handleClick: this.handleClick,
                handleSubmit: this.handleSubmit,
                showDetalles: this.showDetalles,
                closeDetalles: this.closeDetalles,
                removeItem: this.removeItem,
                toggleAsideList: this.toggleAsideList, 
                setLista: this.setLista
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const ContextConsumer = Context.Consumer;

export {ContextProvider, ContextConsumer, Context};