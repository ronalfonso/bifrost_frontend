import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom';
import {BifrostApp} from './bifrostApp';

//theme
import "./assets/styles/customTheme.scss";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <BifrostApp/>
        </BrowserRouter>
    </React.StrictMode>
);

