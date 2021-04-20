import React, { useState } from "react";
import "./styles/modal.scss";
import "./styles/behaviors.scss";
export default function Modal({ children, title, toClose }) {

  const modalClassName = "modal";
  return (
    <div className={modalClassName}>
      <div className="container">
        <div className="panel">
          <h3 className="header">
              <span className="title">{title}</span>
              <span className="controls">
                  <button className="control-button" onClick={()=> toClose()}>X</button>
              </span>
              </h3>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}
