import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store';
import {Provider} from 'react-redux';
import {GeneralProvider} from './contexts/GeneralProvider';
import {AxiosInterceptor} from './core/interceptors';
import {BifrostApp} from './bifrostApp';

// Translate
import './core/translations'

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

AxiosInterceptor();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GeneralProvider>
                <BifrostApp/>
            </GeneralProvider>
        </Provider>
   </React.StrictMode>
);

