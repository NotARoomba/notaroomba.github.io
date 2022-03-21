import React from 'react'
import ReactDOM from 'react-dom'
import './css/App.css'
import { HashRouter } from 'react-router-dom';

import App from './js/App'

ReactDOM.render(
     <HashRouter>
    <App />
    </HashRouter>,
  document.getElementById('root')
)
