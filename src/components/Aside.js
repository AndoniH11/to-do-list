import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Context } from '../context';

class Aside extends React.Component {

    static contextType = Context;

    render() {

        const {showAside, toggleAsideList, showAsideList, setLista} = this.context
        const asideClass = showAside ? 'aside' : 'oculto'
        
        return (
            <aside className = {asideClass}>
                    <section>
                        <div>
                        <GiHamburgerMenu 
                            className='aside-menu-icon aside-icon' 
                            onClick = {() => {toggleAsideList()}}
                            /> Lista
                        </div>
                        
                        <ul className={showAsideList ? 'aside-menu-list ' : 'oculto'}>
                            <li className='selectores-listas' onClick={(e) => setLista(e)}>Personal</li>
                            <li className='selectores-listas' onClick={(e) => setLista(e)}>Trabajo</li>
                            <li className='selectores-listas' onClick={(e) => setLista(e)}>Prioridad</li>
                            <li className='selectores-listas' onClick={(e) => setLista(e)}>Otros</li>
                        </ul>
                    </section>
                    
                    <button className='premium premium-aside'> Hazte Premium</button>
            </aside>
        )
    }

}

export default Aside