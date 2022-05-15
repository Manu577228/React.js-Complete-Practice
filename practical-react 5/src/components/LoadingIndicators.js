import React from 'react'
import { BounceLoader, BeatLoader } from 'react-spinners'
import { css } from '@emotion/react'

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`

function LoadingIndicators() {
    return (
        <div>
         <BounceLoader css={loaderCSS} size={48} color='red' loading />
         <br />
         <BeatLoader css={loaderCSS} size={72} color='maroon' loading />

        </div>
    )
}

export default LoadingIndicators
