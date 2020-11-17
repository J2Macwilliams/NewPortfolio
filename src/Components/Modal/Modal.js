import React from 'react'
import ReactDOM from 'react-dom'
import "../Style/Modal.css"



const Modal = ({ overlay, children }) => (
  ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={ overlay } />
      <div className="modalBox" >
        <div className="modal">
          { children }
        </div>
      </div>
    </>
    ,
    document.getElementById('modal-root')
  )
);

export default Modal
