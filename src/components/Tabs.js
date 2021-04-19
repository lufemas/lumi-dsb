import React, { useState } from 'react'
import '../styles/tabs.scss'

export default function Tabs(props) {

  const [content, setContent] = useState({})
  const [active, setActive] = useState(1)
  return (
    <div>
      {React.Children.map(props.children, (child, index) => {

        if (index % 2 == 0) {
          return (
            <button className={(active == index+1 ? "primary" : '')} onClick={() => {
              setActive(index + 1)
            }}>
              {child}
            </button>
          )
        }
      })}

      {React.Children.map(props.children, (child, index) => {
        let display = "none"
        
        if (index == active) {
          display = "block"
        }

        return (
          <div style={{display}}>
          {child}
          </div>
        )
      })}


    </div>
  )
}
