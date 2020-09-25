import React from 'react';
import NavBar from './components/NavBar';
import Aside from './components/Aside'
import Main from './components/Main';
import DetallesIntroducir from './components/detallesPantalla/DetallesIntroducir';
import DetallesShow from './components/detallesPantalla/DetallesShow';

class App extends React.Component{


    render(){

        return(
            <div>
                <NavBar/> 
                <Aside/> 
                <Main/>
                <DetallesIntroducir/>
                <DetallesShow/>
            </div>
        )
    }
}

export default App