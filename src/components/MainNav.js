import React from 'react'
import HorizontalNav from '../ui-components/HorizontalNav'

export default function MainNav(props) {
    return (
        <HorizontalNav>
            {props.children}
        </HorizontalNav>
    )
}
