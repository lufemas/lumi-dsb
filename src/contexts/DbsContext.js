import React, {createContext, useState} from 'react'

export const DbsContext = createContext()

const DbsContextProvider = (props) => {

  const [jsonDBS, setJsonDBS] = useState({});
    

    return (
        <DbsContext.Provider value={{jsonDBS, setJsonDBS}} >
            {props.children}
        </DbsContext.Provider>
    )
}

export default DbsContextProvider;
