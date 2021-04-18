import React, {createContext, useState} from 'react'

export const DbsContext = createContext()

const DbsContextProvider = (props) => {

  const [jsonDBS, setJsonDBS] = useState({

    "Weapons":{
        "Sword":{
            damage: 10,
            type: "cut",
            range: 2,
            consumable: false,
            equipLoad: 2.5,
            canUse: ["humans, orcs, dwarfs"],
        }
    }

  });
    

    return (
        <DbsContext.Provider value={{jsonDBS, setJsonDBS}} >
            {props.children}
        </DbsContext.Provider>
    )
}

export default DbsContextProvider;
