import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
    return (
        <div>
         <ReactPlayer
          width='480px' 
          height='240px' 
          controls 
          url='https://www.youtube.com/watch?v=gpjv--hxUQM' 
          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
          /> 
        </div>
    )
}

export default VideoPlayer
