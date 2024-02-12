import { createContext, useState } from 'react';

const Context = createContext({});

const initialState = {
    is_dark_theme: false,
    form:{
        room:"", // lista de salas
        procedures:"", // lista de procedimentos
        doctor:"", // Doutor
        pacient: "", // paciente
        hospital: "", // lista de hospitais
        dateSurgical:"", // data cirurgia
        observations: "" // observações
    }
}

const Provider = ({children}) => {
    const [allContext, setAllContext] = useState(initialState)

    return <Context.Provider value={{allContext,setAllContext}}>
        {children}
    </Context.Provider>
}

export {Provider,Context};