import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import Form from './Form/index.tsx'
import Context from './Context.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context>
      <Form />
    </Context>
  </React.StrictMode>,
)
