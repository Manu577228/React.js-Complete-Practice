import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


function ToolTip() {
    return (
        <div>
         <Tippy content='Basic Tooltip'>
         <button>Hover</button>
        </Tippy>

        </div>
    )
}

export default ToolTip
// Refer Any Tippy In google and follow github link or documentation.