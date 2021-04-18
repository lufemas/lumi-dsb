import React, { createContext, useState } from 'react'

export const SchemaContext = createContext()

const SchemaContextProvider = (props) => {

    const [jsonSchema, setJsonSchema] = useState({

        "Weapons": {

            damage: "Integer",
            type: "String",
            range: "Integer",
            consumable: "Boolean",
            equipLoad: "Float",
            canUse: "Array",

        },

        "Amors": {

            bodyPart: "String",
            material: "String",
            physicalDef: "Integer",
            magicDef: {
                fire: "Integer",
                Ice: "Integer",
                poison: "Integer"
            },
            specialAttributes: "Array",

        }


    });

    const addNode = (node) => {
        setJsonSchema({ ...jsonSchema, node })
    }

    return (
        <SchemaContext.Provider value={{ jsonSchema, setJsonSchema }} >
            {props.children}
        </SchemaContext.Provider>
    )
}

export default SchemaContextProvider;
