import React from 'react'
import './styles/horizontal-nav.scss'

export default function HorizontalNav(props) {
    return (
        <nav className="horizontal-nav">
            {props.children.map( child => <li className="item">{child}</li>)}
        </nav>
    )
}
