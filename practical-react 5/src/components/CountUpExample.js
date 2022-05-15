import React from 'react'
import CountUp, { useCountUp } from 'react-countup'


function CountUpExample() {

const { countUp, start, pauseResume, reset, update } = useCountUp({duration: 5, end: 1000})

    return (
        <div>
        <div>
            <h1>{countUp}</h1>
            <button onClick={start}>Start</button>
            <button onClick={pauseResume}>Pause/Resume</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => update(2000)}>Update to 2000</button>
        </div>
        <CountUp end={200}  />
        <br />
        <CountUp end={200} duration={5} />
        <br />
        <CountUp  start={500} end={1000} duration={10} />
        <br />
        <h1><CountUp  start={500} end={1000} duration={5} prefix='$' decimals={2} /></h1>
        <br />
        <h1><CountUp  start={500} end={1000} duration={5} suffix='USD' decimals={2} /></h1>
        </div>
    )
}

export default CountUpExample
