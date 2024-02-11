import { useContext, useEffect } from 'react'
import { Context } from '../Context'
import './style.css'

function App() {
  const {allContext,setAllContext} = useContext<any>(Context);

  useEffect(() => {
    console.log(allContext);
    setAllContext({...allContext,formulario:{"nome":"A"}})
  },[])
  

  return (
    <>
      
    </>
  )
}

export default App
