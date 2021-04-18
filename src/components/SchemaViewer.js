import '../styles/tree.scss'
import React, { useContext } from 'react'
import { SchemaContext } from '../contexts/SchemaContext'

export default function SchemaViewer() {

  const { jsonSchema, setJsonSchema } = useContext(SchemaContext)

  const generateTreeForItem = (item) => {

    return Object.keys(item).map((rootKey, index) => {
      if (typeof item[rootKey] === 'object' && item[rootKey] !== null) {
        return (
          <li className="section">
            <input type="checkbox" id={rootKey} />
            <label for={rootKey}>{rootKey} <sup>({Object.keys(item[rootKey]).length})</sup></label>

            <ul>{generateTreeForItem(item[rootKey])}</ul>

          </li>
        )

      } else {
        return (
          <li>{rootKey}: <span>{item[rootKey]}</span></li>
        )
      }

    })
  }

  return (
    <div>
      <ul class="tree">
        {/* <!-- (A) "NORMAL" ITEMS --> */}


        {

          generateTreeForItem(jsonSchema)

        }



      </ul>
    </div>
  )
}
