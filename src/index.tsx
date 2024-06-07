import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlodalStyled} from "./styles/Glodal.styled";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlodalStyled/>
        <App/>
    </React.StrictMode>
);


