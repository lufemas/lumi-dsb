import React, { useState, useEffect } from "react";
import "./styles/modal.scss";
import "./styles/behaviors.scss";
export default function Modal({ children, title, toClose }) {

  const [mouseMovement, SetMouseMovement] = useState({x: 0, y: 0})
  const [trackingMouse, SetTrackingMouse] = useState(false)

  const mouseMove = (e)=>{
    if (!trackingMouse) return
    const panel = e.target.parentElement
    if(panel.classList != "panel") return
    console.log(panel)
    // panel.offsetTop = mouseMove.y
    panel.style.left = String(panel.offsetLeft +  mouseMovement.x ) + "px"
    panel.style.top = String(panel.offsetTop +  mouseMovement.y) + "px"
    // document.body.style.left
    SetMouseMovement({x : e.movementX , y: e.movementY})

  }

  const dragMouseDown = (e) => {
    SetTrackingMouse(true)
    // console.log($panel)
  }

  const releaseDrag = (e)=>{
    SetTrackingMouse(false)

  }

  useEffect(() => {
    return () => {
    }
  }, [mouseMovement])

  const modalClassName = "modal";
  return (
    <div className={modalClassName}>
      <div className="container">
        <div className="panel">
          <h3 className="header" onMouseDown={dragMouseDown} onMouseUp={releaseDrag} onMouseMove={mouseMove} onMouseLeave={releaseDrag}>
              <span className="title">{title}</span>
              <nav className="controls">
                  <button className="control-button" onClick={()=> toClose()}>X</button>
              </nav>
              </h3>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}
