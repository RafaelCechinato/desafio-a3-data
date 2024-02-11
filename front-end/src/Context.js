import { createContext, useContext } from 'react';

const Context = createContext({});

const Provider = ({children}) => {
    const [context, setContext] = useContext(context)

    return <Context.Provider value={[context,setContext]}>
        {children}
    </Context.Provider>
}

export default Provider;