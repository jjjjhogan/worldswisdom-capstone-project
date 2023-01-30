import React from 'react';
import ReactDOM from 'react-dom/client';
import { THEME as theme } from "./constants";
import App from './App';
import "./styles/bootstrap/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import './index.css';
import "./styles/css/global.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
