import '../styles/tree.scss'
import React, { useContext, useState } from 'react'
import { SchemaContext } from '../contexts/SchemaContext'
import AddModal from './AddModal'

export default function SchemaViewer() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [nodeInChange, setNodeInChange] = useState("")

  const { jsonSchema, setJsonSchema, deleteField } = useContext(SchemaContext)

  const generateTreeForItem = (item, keyPath) => {

    return Object.keys(item).map((rootKey, index) => {
      if (typeof item[rootKey] === 'object' && item[rootKey] !== null) {

        return (
          <li className="section">
            <input type="checkbox" id={`schema-${rootKey}`} />
            <label for={`schema-${rootKey}`}>
              {rootKey} <sup>({Object.keys(item[rootKey]).length})</sup>
              <button onClick={() => {
                setNodeInChange({name : rootKey, path: keyPath})
                setShowAddModal(true)
              }
              }
              >Add {keyPath}</button>
               <button onClick={() => {
                setNodeInChange({name : rootKey, path: keyPath})
                // setShowAddModal(true)
                deleteField({name : rootKey, path: keyPath})
              }
              }
              >Delete {keyPath}</button>
            </label>

            <ul>{generateTreeForItem(item[rootKey],[...keyPath, rootKey])}</ul>

          </li>
        )

      } else {
        // keyPath = []

        return (
          <li>{rootKey}: <span>{item[rootKey]}</span></li>
        )
      }

    })
  }

  return (
    <div>
      <AddModal setIsOpen={setShowAddModal} isOpen={showAddModal} node={nodeInChange} />

      <ul class="tree">

        {

          generateTreeForItem(jsonSchema, [])

        }



      </ul>
    </div>
  )
}
