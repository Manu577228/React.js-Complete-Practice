import React, { useState, useEffect} from 'react'

function HookMouse() {

const [x,setX] = useState(0)
const [y,setY] = useState(0)

const logMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
   
}


useEffect(() => {
    console.log('Mouse event')
    window.addEventListener('mousemove', logMousePosition)


    return  () => {
    console.log('Component Unmounting code')
    window.removeEventListener('mousemove', logMousePosition)
    }    
}, [])

    return(
        <div>
         Hooks X - {x}  Y - {y} 
        </div>
    )
}

export default HookMouse
