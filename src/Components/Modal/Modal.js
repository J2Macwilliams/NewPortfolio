import React from 'react'
import ReactDOM from 'react-dom'
import "../Style/Modal.css"



const Modal = ({ toggleSwitch, children }) => (
  ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={ toggleSwitch } />
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
