import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function IdleTimerContainer() {

    const [ isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const idleTimerRef = useRef(null)
    const sessionTimeOutRef = useRef(null)

    const onIdle = () => {
        console.log('User is idle')
        setModalIsOpen(true)
        sessionTimeOutRef.current = setTimeout(logOut, 5000)
     }
 
    const stayActive = () => {
        setModalIsOpen(false)
        clearTimeout(sessionTimeOutRef.current)
        console.log('User is active')
    }   

    const logOut = () => {
        setModalIsOpen(false)
        setIsLoggedIn(false)
        clearTimeout(sessionTimeOutRef.current)
        console.log('User has logged out')

    }

    return (
        <div>
       {
           isLoggedIn ? <h2>Hello Manu Bharadwaj</h2> : <h2>Hello Guest</h2>
       } 
        <Modal isOpen={modalIsOpen}>
         <h2>You've been idle for a while </h2>
         <p>You will be logged out</p>
         <button onClick={logOut}>Log me out</button>
         <button onClick={stayActive}>Keep me signed in</button>
         </Modal>

        <IdleTimer ref={idleTimerRef} timeout={5 + 1000} onIdle={onIdle}></IdleTimer>  
        </div>
    )
}



export default IdleTimerContainer
