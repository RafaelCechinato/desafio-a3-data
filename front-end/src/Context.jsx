import { createContext, useState } from 'react';
import {getTodayDate} from './Utils'

const Context = createContext({});

const initialState = {
    is_dark_theme: false,
    showModal: false,
    modalContent: "",
    codeOfSurgicalSelected: 0,
    form:{
        room:"", // lista de salas
        procedures:"", // lista de procedimentos
        doctor:"", // Doutor
        pacient: "", // paciente
        hospital: "", // lista de hospitais
        dateSurgical:"", // data cirurgia
        dateCreate: getTodayDate(), // data criação
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