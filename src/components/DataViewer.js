import '../styles/tree.scss'
import React, { useContext } from 'react'
import { DbsContext } from '../contexts/DbsContext'

export default function DataViewer() {

  const { jsonDBS, setJsonDBS } = useContext(DbsContext)

  const generateTreeForItem = (item) => {

    return Object.keys(item).map((rootKey, index) => {
      if (typeof item[rootKey] === 'object' && item[rootKey] !== null) {
        return (
          <li className="section">
            <input type="checkbox" id={`data-${rootKey}`} />
            <label for={`data-${rootKey}`}>{rootKey} <sup>({Object.keys(item[rootKey]).length})</sup></label>

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


        {

          generateTreeForItem(jsonDBS)

        }



      </ul>
    </div>
  )
}
