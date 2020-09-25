import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import App from './App'
import { ContextProvider } from './context';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , 
    document.querySelector('#root')
)