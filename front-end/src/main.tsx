import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './Components/Form/index.tsx'
import {Provider} from './Context.jsx'
import './assets/index.css'
import Card from './Components/Card/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Card>
        <Form></Form>
      </Card>
    </Provider>
  </React.StrictMode>,
)
