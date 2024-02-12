import { createContext, useState } from 'react';

const Context = createContext({});

const initialState = {
    is_dark_theme: false,
    form:{
        email:""
    }
}

const Provider = ({children}) => {
    const [allContext, setAllContext] = useState(initialState)

    return <Context.Provider value={{allContext,setAllContext}}>
        {children}
    </Context.Provider>
}

export {Provider,Context};