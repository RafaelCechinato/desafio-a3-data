import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from './Context.jsx'
import './assets/index.css'

import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
