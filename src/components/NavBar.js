import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdSettings } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { RiNotificationBadgeLine } from 'react-icons/ri';
import { GoSync } from 'react-icons/go';
import hamaca from '../assets/img/hamaca.png';
import { Context } from '../context';

class NavBar extends React.Component {

    static contextType = Context;

    render() {
        const { toggleAside, toggleNotifications, toggleSettings, showNotifications, showSettings } = this.context

        return (
            <header>
                <div className='left-container'>
                    <GiHamburgerMenu
                        className='icon toogle-menu sizable'
                        onClick={() => toggleAside()}
                    />
                </div>

                <div className='right-container'>
                    <ul>
                        <li>
                            <MdSettings
                                className='icon rotable settings'
                                onClick={() => toggleSettings()} />
                            <ul className={showSettings ? 'settings-desplegable' : 'oculto'} >
                                <li>
                                    <h2>Ajustes</h2>
                                </li>
                                <li className='item-desplegable'>
                                    Mi perfil
                                    <MdNavigateNext className='arrow' />
                                </li>
                                <li className='item-desplegable'>
                                    Notificaciones
                                    <MdNavigateNext className='arrow' />
                                </li>
                                <li className='item-desplegable'>
                                    Ajustes de horario
                                    <MdNavigateNext className='arrow' />
                                </li>
                                <li className='item-desplegable'>
                                    Soporte
                                    <MdNavigateNext className='arrow' />
                                </li>
                                <li className='item-desplegable'>
                                    Sobre Nosotros
                                    <MdNavigateNext className='arrow' />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <RiNotificationBadgeLine
                                className='icon sizable notification'
                                onClick={() => toggleNotifications()} />
                            <ul className= {showNotifications ? 'notification-desplegable' : 'oculto'} >
                                <li><h2>Notificaciones</h2></li>
                                <li><img className='hamaca' src={hamaca} alt='imagen de unas vacaciones' /></li>
                                <li>No tienes noticias por ahora!</li>
                            </ul>
                        </li>
                        <li>
                            <GoSync className='icon rotable sync' />
                        </li>
                        <li>
                            <button className='premium'> Hazte Premium</button>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default NavBar