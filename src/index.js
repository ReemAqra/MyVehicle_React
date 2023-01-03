import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import "./i18n";
import 'bootstrap/dist/css/bootstrap.min.css'
import {filterContextProvider} from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*<filterContextProvider>*/}
            <App />

        {/*</filterContextProvider>*/}

    </BrowserRouter>
);

