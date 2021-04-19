import React from 'react'
import HorizontalNav from '../ui-components/HorizontalNav'

export default function MainNav({setShowAddModal}) {
    return (
        <HorizontalNav>
            <a>Home</a>
            <span>New</span>
            <a onClick={()=> setShowAddModal(true)}>Add</a>
        </HorizontalNav>
    )
}
