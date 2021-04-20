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

        "Armors": {

            bodyPart: "String",
            material: "String",
            physicalDef: "Integer",
            magicDef: {
                fire: "Integer",
                Ice: "Integer",
                poison: "Integer",
                spells: {
                    curse: "Boolean",
                    motion: "Boolean"
                }
            },
            specialAttributes: "Array",

        }


    });

    const getNodeToEdit = (node, tempJsonSchema) =>{
        console.log(node.path)
        console.log(node.name)
       return node.path.length == 0 ? tempJsonSchema[node.name] : getNodeToEdit(node, tempJsonSchema[node.path.shift()])
    }

    const getNodeToDelete = (node, tempJsonSchema) =>{
        console.log(node.path)
        // console.log(node.name)
        // console.log(tempJsonSchema)
       return node.path.length == 0? tempJsonSchema : node.path.length == 1 ? tempJsonSchema[node.path] : getNodeToEdit(node, tempJsonSchema[node.path.shift()])
    }

    const addField = (node, field) => {
        node =  getNodeToEdit(node, jsonSchema)
        node[field.name] = field.type
        setJsonSchema(jsonSchema)
    }

    const deleteField = (node, field) => {
        const newJsonSchema = {...jsonSchema}
        // delete getNodeToDelete(node, newJsonSchema)[node.name]
        console.log(';;;;;')
        console.log (getNodeToDelete(node, newJsonSchema))
        // console.log(node.name)
        // console.log(node)
        // delete node
        setJsonSchema(newJsonSchema)
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
