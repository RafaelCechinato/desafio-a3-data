import { createContext, useState } from 'react';

const Context = createContext({});

const Provider = ({children}) => {
    const [allContext, setAllContext] = useState({})

    return <Context.Provider value={{allContext,setAllContext}}>
        {children}
    </Context.Provider>
}

export {Provider,Context};