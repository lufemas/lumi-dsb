import React, { useState } from 'react'
import "../styles/modal.scss"
import "../styles/behaviors.scss"
export default function Modal({isOpen= true}) {
    const [open, setOpen] = useState(isOpen)

    const modalClassName = "modal " + (open ? "show" : "hide") 

    return (
        <div className={modalClassName}>
            <div className="container">

                <div className="panel">
                    <p>Something here</p>
                    <button onClick={()=> setOpen(!open)}>Close</button>
                </div>

            </div>
            
        </div>
    )
}
