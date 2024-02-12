import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import './index.css'
import Router from './Router.jsx'
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>

    <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
