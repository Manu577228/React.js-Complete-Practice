import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function ModalExample() {

const [modalIsOpen, setModalIsOpen] = useState(false)   
    
    return (
        <div>
        <button onClick= {() => setModalIsOpen(true) }>Open Modal</button>    
        <Modal 
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={
            {
                overlay: {
                backgroundColor: 'grey'
                },
                content: {
                    color: 'orange'
                }
            }
        }
    
        >
       <h2>Modal Title</h2>
       <p>Modal Body</p>
       <div>
       <button onClick={() => setModalIsOpen(false)}>Close</button>
       </div>
       </Modal>
            
        </div>
    )
}

export default ModalExample
