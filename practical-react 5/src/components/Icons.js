import React from 'react'
import { IconContext } from 'react-icons';
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";


function Icons() {
    return (
    <IconContext.Provider value={{size: '5rem', color: 'green'}}>
        <div>
         <FaReact />
         <MdAlarm color='purple' size='2rem' />
      </div>

      </IconContext.Provider>
    )
}

export default Icons
