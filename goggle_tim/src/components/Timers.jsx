import React from 'react'

import { useState } from 'react'

const Timers = () => {
    const [time,setTime] = useState(0);
    const [intervalId,setIntervalId] = useState(0);
    const handleClick = ()=>{
        if(intervalId){
            clearInterval(intervalId);
            setIntervalId(0);
            return
        }
        const newSetinterval = setInterval(()=>{
            setTime(prev => prev +1);
        },100)
        setIntervalId(newSetinterval)
        

    }
    const handleCLickReset = ()=>{
        setTime(0)
    }
  return (
    <div>Timers
    <h1>{time}</h1>
    <button onClick={handleClick}>{intervalId? "Stop":"Start"}</button>
    <button onClick={handleCLickReset}>Reset</button>

    </div>
  )
}

export default Timers