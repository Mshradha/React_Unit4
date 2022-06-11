import React,{useState,useRef} from 'react';

const Timer = () => {
    const [time,setTime] = useState(0);
    const timerRef = useRef(null);
  
    const handleStart  = () =>{
        if(timerRef.current){
            return
        }
        timerRef.current=setInterval(()=>{
            setTime((prev)=> prev+1);
        },1000)
    }
    const handleStop = ()=>{
        if(timerRef.current){
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }
    const handleReset = ()=> {
        handleStop();
        setTime(0);
    };
    return (
    <div>
        <h1>{time}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Timer
