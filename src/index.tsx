import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './store';
import {Provider} from 'react-redux';
import {GeneralProvider} from './contexts/general/GeneralProvider';
import {AxiosInterceptor} from './core/interceptors';
import {BifrostApp} from './bifrostApp';

// Translate
import './core/translations'

AxiosInterceptor();
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <GeneralProvider>
            <Router>
                <React.StrictMode>
                    <BifrostApp/>
                </React.StrictMode>
            </Router>
        </GeneralProvider>
    </Provider>
);

