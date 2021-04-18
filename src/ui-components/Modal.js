import React, { useState } from "react";
import "./styles/modal.scss";
import "./styles/behaviors.scss";
export default function Modal({ isOpen, children, title, toClose }) {
  const [open, setOpen] = useState(isOpen);

  const modalClassName = "modal " + (open ? "show" : "hide");
  console.log(open);
  return (
    <div className={modalClassName}>
      <div className="container">
        <div className="panel">
          <h3 className="header">
              <span className="title">{title}</span>
              <span className="controls">
                  <button className="control-button" onClick={toClose}>X</button>
              </span>
              </h3>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}
