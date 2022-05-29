import React,{useState} from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount (count+1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={()=> setCount(count*2)}>double</button>
    </div>
  )
}

export default Count