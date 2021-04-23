import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const SchemaContext = createContext()

const SchemaContextProvider = (props) => {

    const [jsonSchema, setJsonSchema] = useState([

        {
            id : "1",
            parent: "",
            name: "Weapon",
            type: "Table"

        },

        {
            id: "2",
            parent: "1",
            name: "damage",
            type: "Integer", 

        },

        {
            id: "3",
            parent: "1",
            name: "type",
            type: "String", 

        },

        {
            id: "4",
            parent: "3",
            name: "type",
            type: "String", 

        }


    ]);

    const getField = (id) =>{
       return 
    }

    const getNodeToDelete = (node, tempJsonSchema) =>{
      return
    }

    const addField = (field) => {
        
      setJsonSchema([
          ...jsonSchema,
          {
              id: uuidv4(),
              ...field
          }
      ])

      console.log("adding field", field, jsonSchema)
    }

    const deleteField = (id) => {
        setJsonSchema(
            jsonSchema
            .filter(
                f => f.id !== id && f.parent !== id
            )
        )

    }

    const addNode = (node) => {
        setJsonSchema({ ...jsonSchema, node })
    }

    return (
        <SchemaContext.Provider value={{ jsonSchema, setJsonSchema, addField, deleteField }} >
            {props.children}
        </SchemaContext.Provider>
    )
}

export default SchemaContextProvider;
