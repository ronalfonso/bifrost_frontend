import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import {Provider} from 'react-redux';

import {BifrostApp} from './bifrostApp';

//theme
import "./assets/styles/customTheme.scss";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
                    <BifrostApp/>
        </Provider>
    </React.StrictMode>
);

